/* eslint-disable @typescript-eslint/ban-types */
import { isError } from 'src/utils/type-checkers';
import { valiadteId } from 'src/utils/validateId';
import { PATH_NAMES } from '../const/path-names';
import { ROUTER_PATHS } from '../const/router-paths';
import { getFetchOptions } from './get-fetch-options';

export const dynamicRouteHandler = async (pathname: string, commonPath: string, fetchData: Function | -1) => {
  const options = getFetchOptions();
  if (pathname.startsWith(commonPath) && fetchData !== -1 && options.id && valiadteId(commonPath, options.id)) {
    try {
      const item = await fetchData(options);
      if (!isError(item)) {
        const route = ROUTER_PATHS[commonPath];
        document.title = route.title;
        route.template({ item, pathname });
      } else {
        const route = ROUTER_PATHS[PATH_NAMES.notFound];
        route.template();
        document.title = route.title;
      }
    } catch {
      const route = ROUTER_PATHS[PATH_NAMES.notFound];
      route.template();
      document.title = route.title;
    }
  } else {
    const route = ROUTER_PATHS[PATH_NAMES.notFound];
    route.template();
    document.title = route.title;
  }
};
