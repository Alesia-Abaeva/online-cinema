import './style.scss';
import { pathResolver } from './router/router';

const theme = localStorage.getItem('theme');
if (theme) document.documentElement.setAttribute('data-theme', theme);
// инициализация приложения
pathResolver(window.location.pathname);

window.addEventListener('popstate', (): void => {
  pathResolver(window.location.pathname);
});
