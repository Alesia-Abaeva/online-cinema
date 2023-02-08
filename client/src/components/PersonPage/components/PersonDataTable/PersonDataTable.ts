import { createElem } from 'src/utils/create-element';
import { getPersonFields } from '../../Handlers/person-data';

export const renderPersonDataTable = (personData: ResponsePerson): HTMLElement => {
  const personAbout: HTMLElement = createElem('div', 'id-page__about');
  const aboutTitle: HTMLElement = createElem('h2', 'id-page__about-title');
  aboutTitle.innerHTML = 'О персоне';

  const aboutTable: HTMLElement = createElem('div', 'id-page__about-table');
  aboutTable.classList.add('about-table');

  const formatedData = getPersonFields(personData);
  formatedData.forEach((el) => {
    if (el.displayedData) {
      const row: HTMLElement = createElem('div', 'about-table__row');
      const rowTitle: HTMLElement = createElem('div', 'about-table__row-title');
      rowTitle.innerHTML = el.title;
      const rowContent: HTMLElement = createElem('div', 'about-table__row-content');

      const rowContentItem = createElem('a', 'about-table__row-content-item') as HTMLLinkElement;
      rowContentItem.innerHTML = el.displayedData;
      rowContent.append(rowContentItem);

      row.append(rowTitle, rowContent);

      aboutTable.append(row);
    }
  });

  personAbout.append(aboutTitle, aboutTable);
  return personAbout;
};
