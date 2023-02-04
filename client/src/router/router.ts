import { getMovie } from 'src/api/films';
import { getListFucntion } from 'src/utils/get-list-function';
import { ROUTER_PATHS } from '../const/router-paths';
import { PATH_NAMES } from '../const/path-names';
import { dynamicRouteHandler } from './dynamic-route-handler';

/** Рендер темплейтов страниц */
export const pathResolver = (pathname: string): void => {
  const route = ROUTER_PATHS[pathname] || ROUTER_PATHS[PATH_NAMES.notFound];

  // If any dynamic cases else all handle all static routes

  if (pathname.startsWith(PATH_NAMES.films)) {
    dynamicRouteHandler(pathname, PATH_NAMES.films, getMovie);
  } else if (pathname.startsWith(PATH_NAMES.list)) {
    dynamicRouteHandler(pathname, PATH_NAMES.list, getListFucntion(pathname));
  } else {
    route.template();
    document.title = route.title;
  }
};
