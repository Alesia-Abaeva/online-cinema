import { store } from 'src/logic/redux';

export const isFilmInFolder = (filmId: number, folder: string): boolean => {
  const { data } = store.getState().auth.user;
  const folders = data ? data.folders : '';
  if (folders && folders[folder]) {
    const folderData = folders[folder];
    return folderData.indexOf(filmId) !== -1;
  }
  return false;
};
