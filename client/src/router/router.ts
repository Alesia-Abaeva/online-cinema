import { getMovie, getPerson } from 'src/api/films';
import { getList } from 'src/api/back/lists';
import { getCollection } from 'src/api/back/collections';
import { getSlider } from 'src/api/back/slider';
import { ROUTER_PATHS } from '../const/router-paths';
import { PATH_NAMES } from '../const/path-names';
import { dynamicRouteHandler } from './dynamic-route-handler';

/** Рендер темплейтов страниц */
export const pathResolver = (pathname: string): void => {
  const route = ROUTER_PATHS[pathname] || ROUTER_PATHS[PATH_NAMES.notFound];

  if (pathname.startsWith(PATH_NAMES.films)) {
    dynamicRouteHandler(pathname, PATH_NAMES.films, getMovie);
  } else if (pathname.startsWith(PATH_NAMES.list)) {
    dynamicRouteHandler(pathname, PATH_NAMES.list, getList);
  } else if (pathname.startsWith(PATH_NAMES.name)) {
    dynamicRouteHandler(pathname, PATH_NAMES.name, getPerson);
  } else if (pathname.startsWith(PATH_NAMES.collection)) {
    dynamicRouteHandler(pathname, PATH_NAMES.collection, getCollection);
  } else if (pathname.startsWith(PATH_NAMES.slider)) {
    dynamicRouteHandler(pathname, PATH_NAMES.slider, getSlider);
  } else {
    route.template();
    document.title = route.title;
  }
};
