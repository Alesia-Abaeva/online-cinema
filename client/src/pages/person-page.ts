import { renderPersonPage } from 'src/components/PersonPage/PersonPage';
import { renderApp } from '../components/App/App';

export const name = (data: PersonItems): void => {
  const personData = data.item;
  renderApp(() => renderPersonPage(personData.data));
};
