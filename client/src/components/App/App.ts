import { getMovie } from 'src/api/films';
import { renderFooter } from '../Footer/Footer';
import { renderHeader } from '../Header/Header';
import styles from './App.module.scss';

export const renderApp = (func: () => HTMLElement): Element => {
  document.body.classList.add(styles['body']);

  // #app - точка входа в разметке html
  const appContiner: Element = document.querySelector('#app') as Element;
  appContiner.innerHTML = '';

  const header: HTMLElement = renderHeader();
  const footer: HTMLElement = renderFooter();
  const main: HTMLElement = func();

  const a = async () => {
    const b = await getMovie(304);
    console.log(b);
  };

  a();

  appContiner.append(header, main, footer);

  return appContiner;
};
