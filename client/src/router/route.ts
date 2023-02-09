import { getLocalStorage } from 'src/logic/local-storage/local-storage';
import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { PATH_NAMES } from 'src/const/path-names';

import { pathResolver } from './router';

export const route = (pathname: string): void => {
  const token = getLocalStorage(LOCAL_STORAGE_KEYS.TOKEN);
  let path = pathname;

  if (token && (pathname === PATH_NAMES.login || pathname === PATH_NAMES.register)) {
    path = PATH_NAMES.main;
  }

  if (!token && pathname === PATH_NAMES.user) {
    path = PATH_NAMES.main;
  }

  window.history.pushState({}, '', window.location.origin + path);
  pathResolver(path);
};
