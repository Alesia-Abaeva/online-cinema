import { paginaitonState } from 'src/const/default-query-options';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { formatRuWord } from 'src/utils/formatRUWorld';
import { getWatchedMoviesCount } from 'src/utils/get-watched-movies-count';
import { updateListPageUI } from '../../updateListPageUI';
import { renderListItem } from './components/ListItem/ListItem';
import { renderPagination } from './components/Pagination/Pagination';
import { renderProgressBar } from './components/ProgressBar/ProgressBar';
import styles from './ListContent.module.scss';

export const renderListContent = (listItems: ListItems, listData: ListCard): HTMLElement => {
  const litsContent: HTMLElement = createElem('div', styles['list-content']);
  const listHeader: HTMLElement = createElem('div', 'list-content__header');

  const listTitle: HTMLElement = createElem('h1', 'list-content__title');
  listTitle.innerHTML = listData.title;

  const listImgCont: HTMLElement = createElem('div', 'list-content__img-cont');
  const listImg: HTMLElement = createElem('img', 'list-content__img');
  listImg.setAttribute('src', listData.imgUrl);
  listImgCont.append(listImg);

  listHeader.append(listTitle, listImgCont);

  const progressBar: HTMLElement = renderProgressBar(`Вы посмотрели ${0} фильмов из ${listItems.item.total}`);

  const listItemsContainer: HTMLElement = createElem('div', 'list-content__list-items');

  listItems.item.docs.forEach((el, id) => {
    const listItem: HTMLElement = renderListItem(el, id, listItems.item.page, listItems.item.limit);
    listItemsContainer.append(listItem);
  });

  paginaitonState.total = listItems.item.total;
  const pagination: HTMLElement = renderPagination(updateListPageUI);

  litsContent.append(listHeader, progressBar, listItemsContainer, pagination);

  store.subscribe(() => {
    const watchedCount = listItems.item.allId ? getWatchedMoviesCount(listItems.item.allId) : 0;
    const totalCount = listItems.item.total;
    const percentage = (watchedCount / totalCount) * 100;
    const titleEl = document.querySelector('.progress-bar__title');
    const progressBarLine = document.querySelector('.progress-bar__line-fill');
    if (titleEl instanceof HTMLElement && progressBarLine instanceof HTMLElement) {
      progressBarLine.style.width = `${percentage}%`;
      titleEl.innerHTML = `Вы посмотрели ${watchedCount} ${formatRuWord(watchedCount, [
        'фильм',
        'фильма',
        'фильмов',
      ])} из ${totalCount}`;
    }
  });

  return litsContent;
};
