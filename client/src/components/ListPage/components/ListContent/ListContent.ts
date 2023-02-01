import { createElem } from 'src/utils/create-element';
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

  const progressBar: HTMLElement = renderProgressBar(`Вы посмотрели 0 фильмов из ${listItems.item.total}`);

  litsContent.append(listHeader, progressBar);

  return litsContent;
};
