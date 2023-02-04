import { ALL_LISTS } from 'src/const/all-lists';
import { createElem } from 'src/utils/create-element';
import { renderListCard } from './components/ListCard/ListCard';
import styles from './ListsPage.module.scss';

export const renderListsPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['lists-page']);

  const listsContainer: HTMLElement = createElem('div', 'lists-page__lists');

  const title: HTMLElement = createElem('h1', 'lists-page__title');
  title.innerHTML = 'Списки лучших фильмов и сериалов';

  listsContainer.append(title);

  ALL_LISTS.forEach((cardData) => {
    const listCard = renderListCard(cardData);
    listsContainer.append(listCard);
  });

  mainContent.append(listsContainer);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
