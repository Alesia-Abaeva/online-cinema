import { createElem } from 'src/utils/create-element';
import { getFilmFields } from '../../Handlers/film-data';
import { renderPopover } from '../Popover/Popover';
import styles from './FilmDataTable.module.scss';

export const renderFilmDataTable = (filmData: ResponseMovie): HTMLElement => {
  const filmAbout: HTMLElement = createElem('div', styles['id-page__about']);
  const aboutTitle: HTMLElement = createElem('h2', 'id-page__about-title');
  aboutTitle.innerHTML = 'О фильме';

  const aboutTable: HTMLElement = createElem('div', 'id-page__about-table');
  aboutTable.classList.add('about-table');

  const formatedData = getFilmFields(filmData);
  formatedData.forEach((el) => {
    if (el.fieldData[0]) {
      const row: HTMLElement = createElem('div', 'about-table__row');
      const rowTitle: HTMLElement = createElem('div', 'about-table__row-title');
      rowTitle.innerHTML = el.title;
      const rowContent: HTMLElement = createElem('div', 'about-table__row-content');

      const shortData = el.fieldData.slice(0, 4);
      shortData.forEach((item, idx) => {
        const rowContentItem = createElem('a', 'about-table__row-content-item') as HTMLLinkElement;
        if (el.type === 'person' && typeof item !== 'string') {
          if (!item.name) return;
          if (idx === 3) {
            rowContentItem.innerHTML = '...';
            rowContent.append(rowContentItem);
            return;
          }
          const popoverWrapper: HTMLElement = createElem('div', 'popover__wrapper');
          rowContentItem.classList.add('id-page__person_link');
          rowContentItem.setAttribute('href', `/name/${item.id}`);
          rowContentItem.dataset.personId = item.id.toString();

          const popover: HTMLElement = renderPopover(item);

          rowContentItem.innerHTML = idx < 2 && idx !== shortData.length - 1 ? `${item.name},` : item.name;

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
