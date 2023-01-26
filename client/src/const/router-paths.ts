import { projectTitle } from './project-title';
import { notFound } from '../pages/404';
import { app } from '../pages/main';
import { login } from '../pages/login';
import { register } from '../pages/register';
import { film } from '../pages/film-page';
import { PATH_NAMES } from './path-names';

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
    template: register,
    title: `register | ${projectTitle}`,
  },
  [PATH_NAMES.films]: {
    template: film,
    title: `films | ${projectTitle}`,
  },
};
