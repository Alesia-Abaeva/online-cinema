import { renderCollection } from 'src/components/CollectionPage/collectionPage';
import { SLIDERS_ORDER } from 'src/const/main-page-data';
import { renderApp } from '../components/App/App';

export const slider = (data: ListItems): void => {
  const silderData = data.item;
  const sliderHeader = SLIDERS_ORDER.find((el) => el.url === data.pathname);
  renderApp(() => renderCollection(silderData.docs, sliderHeader ? sliderHeader.displayedTitle : 'Коллекция'));
};
