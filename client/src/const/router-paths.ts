import { lists } from 'src/pages/lists';
import { getLocalStorage } from 'src/logic/local-storage/local-storage';
import { list } from 'src/pages/list';
import { user, userPromo, userReference, userSettings, userSubscribe, userWatch } from 'src/pages/user-account';
import { subscriptions } from 'src/pages/subscriptions';
import { collection } from 'src/pages/collection';
import { name } from 'src/pages/person-page';
import { authorized } from 'src/pages/authorized';
import { notauthorized } from 'src/pages/notauthorized';
import { slider } from 'src/pages/slider';
import { personal } from 'src/pages/personal';
import { folder } from 'src/pages/folder';
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
    template: getLocalStorage(LOCAL_STORAGE_KEYS.TOKEN) ? authorized : login,
    title: `login | ${projectTitle}`,
  },
  [PATH_NAMES.register]: {
    template: getLocalStorage(LOCAL_STORAGE_KEYS.TOKEN) ? authorized : register, // TODO: поставить страницу заглушки
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
    template: getLocalStorage(LOCAL_STORAGE_KEYS.TOKEN) ? user : notauthorized,
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
  },
  [PATH_NAMES.subscriptions]: {
    template: subscriptions,
    title: `subscriptions | ${projectTitle}`,
  },
  [PATH_NAMES.collection]: {
    template: collection,
    title: `collection | ${projectTitle}`,
  },
  [PATH_NAMES.slider]: {
    template: slider,
    title: `slider | ${projectTitle}`,
  },
  [PATH_NAMES.personal]: {
    template: personal,
    title: `personal | ${projectTitle}`,
  },
  [PATH_NAMES.folder]: {
    template: folder,
    title: `folder | ${projectTitle}`,
  },
  [PATH_NAMES.userSubscribe]: {
    template: userSubscribe,
    title: `collection | ${projectTitle}`,
  },
  [PATH_NAMES.authorized]: {
    template: authorized,
    title: `authorized | ${projectTitle}`,
  },
  [PATH_NAMES.notauthorized]: {
    template: notauthorized,
    title: `notauthorized | ${projectTitle}`,
  },
};
