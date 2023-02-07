import { createElem } from 'src/utils/create-element';
import { getFilmFields } from '../../Handlers/film-data';
import styles from './FilmDataTable.module.scss';

export const renderFilmDataTable = (filmData: ResponseMovie): HTMLElement => {
  const filmAbout: HTMLElement = createElem('div', styles['film-page__about']);
  const aboutTitle: HTMLElement = createElem('h2', 'film-page__about-title');
  aboutTitle.innerHTML = 'О фильме';

  const aboutTable: HTMLElement = createElem('div', 'film-page__about-table');
  aboutTable.classList.add('about-table');

  const formatedData = getFilmFields(filmData);
  formatedData.forEach((el) => {
    if (el.fieldName) {
      const row: HTMLElement = createElem('div', 'about-table__row');
      const rowTitle: HTMLElement = createElem('div', 'about-table__row-title');
      rowTitle.innerHTML = el.title;

      const rowContent: HTMLElement = createElem('div', 'about-table__row-content');
      rowContent.innerHTML = el.fieldName.toString();
      row.append(rowTitle, rowContent);

      aboutTable.append(row);
    }
  });

  filmAbout.append(aboutTitle, aboutTable);
  return filmAbout;
};
