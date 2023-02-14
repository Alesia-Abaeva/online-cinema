import { store } from 'src/logic/redux';

export const getWatchedMoviesCount = (listIds: number[]): number => {
  const { data } = store.getState().auth.user;
  const folders = data ? data.folders : '';
  const watched = folders ? folders.watched : '';
  let counter = 0;
  if (watched) {
    listIds.forEach((el) => {
      if (watched.indexOf(el) !== -1) {
        counter++;
      }
    });
  }
  return counter;
};
