import { renderCollection } from 'src/components/CollectionPage/CollectionPage';
import { genresData } from 'src/const/genres-data';
import { renderApp } from '../components/App/App';

export const collection = (data: ListItems): void => {
  const collectionData = data.item;
  const listData = genresData.find((el) => el.url === data.pathname);
  renderApp(() => renderCollection(collectionData.docs, listData ? listData.displayedTitle : 'Коллекция', false));
};
