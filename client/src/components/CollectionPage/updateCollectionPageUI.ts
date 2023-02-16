import { paginationState } from 'src/const/default-query-options';
import { setPaginationBtns } from 'src/utils/set-paginaton-btns';
import { renderCollectionFilms } from './component/Collection';

export const updateCollectionPageUI = (data: FindedMovies[]) => {
  const listCont = document.getElementById('list-container') as HTMLElement;
  listCont.innerHTML = '';
  const list: HTMLElement = renderCollectionFilms(data, true);
  listCont.append(list);

  const prevBtn = document.getElementById('prev') as HTMLElement;
  const nextBtn = document.getElementById('next') as HTMLElement;

  setPaginationBtns(prevBtn, nextBtn, paginationState.page, paginationState.limit, paginationState.total);
};
