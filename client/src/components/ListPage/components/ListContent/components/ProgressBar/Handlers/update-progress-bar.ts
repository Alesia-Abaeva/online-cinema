/* eslint-disable no-param-reassign */
import { formatRuWord } from 'src/utils/formatRUWorld';
import { getWatchedMoviesCount } from 'src/utils/get-watched-movies-count';

export const updateProgressBar = (
  listItems: ListItems,
  progressBarTitle: HTMLElement,
  progressBarLine: HTMLElement
): void => {
  const watchedCount = listItems.item.allId ? getWatchedMoviesCount(listItems.item.allId) : 0;
  const totalCount = listItems.item.total;
  const percentage = (watchedCount / totalCount) * 100;

  progressBarLine.style.width = `${percentage}%`;
  progressBarTitle.innerHTML = `Вы посмотрели ${watchedCount} ${formatRuWord(watchedCount, [
    'фильм',
    'фильма',
    'фильмов',
  ])} из ${totalCount}`;
};
