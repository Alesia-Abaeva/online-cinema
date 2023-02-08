import { createElem } from 'src/utils/create-element';
import { getFilmFields } from '../../Handlers/film-data';
import { renderPopover } from '../Popover/Popover';
import styles from './FilmDataTable.module.scss';

export const renderFilmDataTable = (filmData: ResponseMovie): HTMLElement => {
  const filmAbout: HTMLElement = createElem('div', styles['film-page__about']);
  const aboutTitle: HTMLElement = createElem('h2', 'film-page__about-title');
  aboutTitle.innerHTML = 'О фильме';

  const aboutTable: HTMLElement = createElem('div', 'film-page__about-table');
  aboutTable.classList.add('about-table');

  const formatedData = getFilmFields(filmData);
  formatedData.forEach((el) => {
    if (el.fieldData) {
      const row: HTMLElement = createElem('div', 'about-table__row');
      const rowTitle: HTMLElement = createElem('div', 'about-table__row-title');
      rowTitle.innerHTML = el.title;
      const rowContent: HTMLElement = createElem('div', 'about-table__row-content');

      el.fieldData.forEach((item, idx) => {
        const rowContentItem = createElem('a', 'about-table__row-content-item') as HTMLLinkElement;
        if (el.type === 'person' && typeof item !== 'string') {
          if (idx === el.fieldData.length - 1 && el.fieldData.length > 3) {
            rowContentItem.innerHTML = '...';
            rowContent.append(rowContentItem);
            return;
          }
          const popoverWrapper: HTMLElement = createElem('div', 'popover__wrapper');
          rowContentItem.classList.add('film-page__person_link');
          rowContentItem.setAttribute('href', `/person/${item.id}`);
          rowContentItem.dataset.personId = item.id.toString();

          const popover: HTMLElement = renderPopover(item);

          let text: string;
          if (idx === el.fieldData.length - 1 && el.fieldData.length < 3) {
            text = item.name;
          } else {
            text = `${item.name},`;
          }
          rowContentItem.innerHTML = text;

          popoverWrapper.append(rowContentItem, popover);
          rowContent.append(popoverWrapper);
        } else if (typeof item === 'string') {
          rowContentItem.innerHTML = item;
          rowContent.append(rowContentItem);
        }

        row.append(rowTitle, rowContent);
      });

      aboutTable.append(row);
    }
  });

  filmAbout.append(aboutTitle, aboutTable);
  return filmAbout;
};
