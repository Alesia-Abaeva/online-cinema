/* eslint-disable no-underscore-dangle */
import { createElem } from 'src/utils/create-element';
import styles from './UserFolder.module.scss';

export const renderUserFolder = (el: ResponseUserFolder): HTMLElement => {
  const lastFilm = el.films[el.films.length - 1];

  const folder: HTMLElement = createElem('a', styles['user-folder']);
  folder.setAttribute('href', `/folder/${el._id}`);
  const folderTitle: HTMLElement = createElem('p', 'user-folder__title');
  folderTitle.innerHTML = el.displayedName;

  folder.append(folderTitle);

  if (el.films.length === 0) {
    const folderMes: HTMLElement = createElem('div', 'user-folder__empty');
    folder.classList.add('disabled');
    folderMes.innerHTML = 'Пустая папка';
    folder.append(folderMes);
    return folder;
  }

  const folderCardsCont: HTMLElement = createElem('div', 'user-folder__card-cont');

  const folderCard: HTMLElement = createElem('div', 'user-folder__card');
  folderCard.classList.add('user-folder__card_first');

  const folderCard2: HTMLElement = createElem('div', 'user-folder__card');
  folderCard2.classList.add('user-folder__card_second');

  const folderCardImg: HTMLElement = createElem('div', 'user-folder__card');
  folderCardImg.classList.add('user-folder__card_img');

  const filmCounterCont: HTMLElement = createElem('div', 'user-folder__film-counter-cont');
  const filmCounter: HTMLElement = createElem('div', 'user-folder__film-counter');

  filmCounter.innerHTML = el.films.length.toString();

  filmCounterCont.append(filmCounter);

  folderCardImg.append(filmCounterCont);

  const url = `${
    lastFilm.poster
      ? lastFilm.poster.previewUrl
      : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
  }`;
  folderCardImg.style.background = `url(${url}) center / cover no-repeat`;

  folderCardsCont.append(folderCard, folderCard2, folderCardImg);
  folder.append(folderCardsCont);

  return folder;
};
