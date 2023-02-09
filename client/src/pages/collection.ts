import { renderCollection } from 'src/components/CollectionPage/collectionPage';
import { animeData } from '../components/MainPage/mockData';
import { renderApp } from '../components/App/App';

export const collection = (): void => {
  renderApp(() => renderCollection(animeData, 'Аниме'));
};
