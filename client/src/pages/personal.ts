import { renderPersonal } from 'src/components/PersonalPage/PersonalPage';
import { renderApp } from '../components/App/App';

export const personal = (): void => {
  // const filmData = data.item;
  renderApp(() => renderPersonal());
};
