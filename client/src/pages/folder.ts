import { renderApp } from 'src/components/App/App';
import { renderCollection } from 'src/components/CollectionPage/collectionPage';
import { DEFAULT_FOLDERS } from 'src/const/default-folders';
import { extractAfterLastSlash } from 'src/utils/extract-after-last-slash';
import { setPaginationState } from 'src/utils/paginate';
import { isResponseFolder, isResponseUserFolder } from 'src/utils/type-checkers';

export const folder = (data: FolderItems): void => {
  const response = data.item;
  if (isResponseFolder(response)) {
    setPaginationState(response.data.length);

    const keyword = extractAfterLastSlash(data.pathname) as DefaultFoldersNames;
    renderApp(() => renderCollection(response.data, DEFAULT_FOLDERS[keyword], true));
  } else if (isResponseUserFolder(response)) {
    setPaginationState(response.films.length);

    renderApp(() =>
      renderCollection(response.films, response.displayedName ? response.displayedName : 'Коллекция', true)
    );
  }
};
