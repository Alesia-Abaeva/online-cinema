import { lists } from 'src/pages/lists';
import { list } from 'src/pages/list';
import { subscriptions } from 'src/pages/subscriptions';
import {
  user,
  userPromo,
  userReference,
  userReviews,
  userSettings,
  userSubscribe,
  userWatch,
} from 'src/pages/user-account';
import { collection } from 'src/pages/collection';
import { name } from 'src/pages/person-page';
import { authorized } from 'src/pages/authorized';
import { notauthorized } from 'src/pages/notauthorized';
import { slider } from 'src/pages/slider';
import { personal } from 'src/pages/personal';
import { folder } from 'src/pages/folder';
import { store } from 'src/logic/redux';
import { loaderPage, notFound } from '../pages/404';
import { app } from '../pages/main';
import { login } from '../pages/login';
import { register } from '../pages/register';
import { film } from '../pages/film-page';
import { PATH_NAMES } from './path-names';
import { projectTitle } from './project-title';
import { ViewType } from './main-page-data';

/* eslint-disable no-nested-ternary */
export const ROUTER_PATHS = (): Paths => ({
  [PATH_NAMES.loader]: {
    template: loaderPage,
    title: `loader | ${projectTitle}`,
  },
  [PATH_NAMES.notFound]: {
    template: notFound,
    title: `404 | ${projectTitle}`,
  },
  [PATH_NAMES.main]: {
    template: app,
    title: `${projectTitle}`,
  },
  [PATH_NAMES.login]: {
    template: store.getState().uiConfig.isAuth ? authorized : login,
    title: `login | ${projectTitle}`,
  },
  [PATH_NAMES.register]: {
    template: store.getState().uiConfig.isAuth ? authorized : register,
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
    template: store.getState().uiConfig.isAuth
      ? store.getState().uiConfig.viewType === ViewType.CHILD
        ? notFound
        : user
      : notauthorized,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.userWatch]: {
    template: store.getState().uiConfig.isAuth
      ? store.getState().uiConfig.viewType === ViewType.CHILD
        ? notFound
        : userWatch
      : notauthorized,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.userSettings]: {
    template: store.getState().uiConfig.isAuth
      ? store.getState().uiConfig.viewType === ViewType.CHILD
        ? notFound
        : userSettings
      : notauthorized,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.userPromo]: {
    template: store.getState().uiConfig.isAuth
      ? store.getState().uiConfig.viewType === ViewType.CHILD
        ? notFound
        : userPromo
      : notauthorized,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.userReference]: {
    template: store.getState().uiConfig.isAuth
      ? store.getState().uiConfig.viewType === ViewType.CHILD
        ? notFound
        : userReference
      : notauthorized,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.userReviews]: {
    template: store.getState().uiConfig.isAuth
      ? store.getState().uiConfig.viewType === ViewType.CHILD
        ? notFound
        : userReviews
      : notauthorized,
    title: `user | ${projectTitle}`,
  },
  [PATH_NAMES.subscriptions]: {
    template: store.getState().uiConfig.isAuth ? subscriptions : notauthorized,
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
    template: store.getState().uiConfig.isAuth ? personal : notFound,
    title: `personal | ${projectTitle}`,
  },
  [PATH_NAMES.folder]: {
    template: folder,
    title: `folder | ${projectTitle}`,
  },
  [PATH_NAMES.userSubscribe]: {
    template: store.getState().uiConfig.isAuth
      ? store.getState().uiConfig.viewType === ViewType.CHILD
        ? notFound
        : userSubscribe
      : notauthorized,
    title: `collection | ${projectTitle}`,
  },
  [PATH_NAMES.authorized]: {
    template: store.getState().uiConfig.isAuth ? notFound : authorized,
    title: `authorized | ${projectTitle}`,
  },
  [PATH_NAMES.notauthorized]: {
    template: store.getState().uiConfig.isAuth ? notauthorized : notFound,
    title: `notauthorized | ${projectTitle}`,
  },
});
