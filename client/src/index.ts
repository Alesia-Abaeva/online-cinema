import './style.scss';
import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { getLocalStorage } from 'src/logic/local-storage/local-storage';
import { appDispatch } from 'src/logic/redux';
import { getDataPerson } from 'src/logic/redux/actions';
import { pathResolver } from './router/router';
import { getSliders } from './logic/redux/actions';
import { PATH_NAMES } from './const/path-names';

const theme = localStorage.getItem('theme');
if (theme) document.documentElement.setAttribute('data-theme', theme);

const token = getLocalStorage(LOCAL_STORAGE_KEYS.TOKEN);

// IIFE для выполнения в конкретном порядке вызовов функций
(async () => {
  try {
    // переход на загрулшку для ожидания загрузки контента
    pathResolver(PATH_NAMES.loader);

    // загрузка контента
    token && (await appDispatch(getDataPerson(token)));

    await appDispatch(getSliders()); // диспачим слайдеры с стейт

    // инициализация приложения с загруженным контентом
    pathResolver(window.location.pathname);

    window.addEventListener('popstate', (): void => {
      pathResolver(window.location.pathname);
    });
  } catch (e) {
    console.log(e);
  }
})();
