/* eslint-disable no-underscore-dangle */
import { loadState } from 'src/logic/local-storage/local-storage';
import { isNumber } from 'src/utils/is-number';
import { getMovie } from './films';

export const getFolder = async (options: Options): Promise<ResponseFolder | ResponseUserFolder | undefined> => {
  const peristedState = loadState();

  const folderId = options.id;
  let folders: FoldersType | undefined;
  let userFolders: UserFolder[] | undefined;
  if (peristedState) {
    const { data } = peristedState.auth.user;
    folders = data?.folders;
    userFolders = data?.userFolders;
  }

  if (folderId) {
    if (userFolders && isNumber(folderId)) {
      const folderItem = userFolders.find((el) => el._id === +folderId);
      if (folderItem) {
        return {
          displayedName: folderItem.displayedName,
          films: await Promise.all(folderItem.films.map(async (item) => await getMovie({ id: item.toString() }))),
          _id: folderItem._id,
        };
      }
    } else if (folders && !isNumber(folderId)) {
      const folderItem = folders[folderId];
      return {
        folderName: folderId,
        data: await Promise.all(folderItem.map(async (item) => await getMovie({ id: item.toString() }))),
      };
    }
  }
  return undefined;
};
