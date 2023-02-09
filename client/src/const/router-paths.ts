import { lists } from 'src/pages/lists';
import { getLocalStorage } from 'src/logic/local-storage/local-storage';
import { list } from 'src/pages/list';
import { user, userPromo, userReference, userSettings, userWatch } from 'src/pages/user-account';
import { subscriptions } from 'src/pages/subscriptions';
import { name } from 'src/pages/person-page';
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
  [PATH_NAMES.name]: {
    template: name,
    title: `name | ${projectTitle}`,
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
  [PATH_NAMES.userSettings]: {
    template: userSettings,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.userPromo]: {
    template: userPromo,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.userReference]: {
    template: userReference,
    title: `user | ${projectTitle}`,

  [PATH_NAMES.subscriptions]: {
    template: subscriptions,
    title: `subscriptions | ${projectTitle}`,

  },
};
