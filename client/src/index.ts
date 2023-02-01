import './style.scss';
import { pathResolver } from './router/router';

// инициализация приложения
pathResolver(window.location.pathname);

window.addEventListener('popstate', (): void => {
  pathResolver(window.location.pathname);
});
