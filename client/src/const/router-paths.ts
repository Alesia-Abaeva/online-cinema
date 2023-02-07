import { lists } from 'src/pages/lists';
import { getLocalStorage } from 'src/logic/local-storage/local-storage';
import { list } from 'src/pages/list';
import { user, userWatch } from 'src/pages/user-account';
import { notFound } from '../pages/404';
import { app } from '../pages/main';
import { login } from '../pages/login';
import { register } from '../pages/register';
import { film } from '../pages/film-page';
import { PATH_NAMES } from './path-names';
import { projectTitle } from './project-title';
import { LOCAL_STORAGE_KEYS } from './local-storage';

export const ROUTER_PATHS: Paths = {
  [PATH_NAMES.notFound]: {
    template: notFound,
    title: `404 | ${projectTitle}`,
  },
  [PATH_NAMES.main]: {
    template: app,
    title: `${projectTitle}`,
  },
  [PATH_NAMES.login]: {
    template: login,
    title: `login | ${projectTitle}`,
  },
  [PATH_NAMES.register]: {
    template: getLocalStorage(LOCAL_STORAGE_KEYS.TOKEN) ? notFound : register,
    title: `register | ${projectTitle}`,
  },
  [PATH_NAMES.films]: {
    template: film,
    title: `films | ${projectTitle}`,
  },
  [PATH_NAMES.lists]: {
    template: lists,
    title: `lists | ${projectTitle}`,
  },
  [PATH_NAMES.list]: {
    template: list,
    title: `list | ${projectTitle}`,
  },
  [PATH_NAMES.user]: {
    template: user,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.userWatch]: {
    template: userWatch,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.user]: {
    template: user,
    title: `user | ${projectTitle}`,
  },
};
