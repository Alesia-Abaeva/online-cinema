import { renderSubscriptions } from 'src/components/SubscriptionsPage/SubscriptionsPage';
import { renderApp } from '../components/App/App';

export const subscriptions = (): void => {
  renderApp(renderSubscriptions);
};
