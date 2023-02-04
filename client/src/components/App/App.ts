import { appDispatch } from 'src/logic/redux';
import { getDataPerson } from 'src/logic/redux/actions';
import { renderFooter } from '../Footer/Footer';
import { renderHeader } from '../Header/Header';
import styles from './App.module.scss';

export const renderApp = (func: () => HTMLElement): Element => {
  document.body.classList.add(styles['body']);

  appDispatch(getDataPerson());

  // #app - точка входа в разметке html
  const appContiner: Element = document.querySelector('#app') as Element;
  appContiner.innerHTML = '';

  const header: HTMLElement = renderHeader();
  const footer: HTMLElement = renderFooter();
  const main: HTMLElement = func();


  // TODO - добавить стор в функцию Init


  appContiner.append(header, main, footer);

  return appContiner;
};
