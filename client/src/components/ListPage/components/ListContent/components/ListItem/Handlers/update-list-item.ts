import { isFilmInFolder } from 'src/utils/is-film-in-folder';

export const updateListItem = (item: HTMLElement): void => {
  const { id } = item.dataset;
  if (id && isFilmInFolder(+id, 'watched')) {
    item.classList.add('list-item_active');
  } else {
    item.classList.remove('list-item_active');
  }
};
