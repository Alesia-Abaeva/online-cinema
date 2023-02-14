/* eslint-disable @typescript-eslint/ban-types */
import { isError } from 'src/utils/type-checkers';
import { valiadteId } from 'src/utils/validateId';
import { ROUTER_PATHS } from '../const/router-paths';
import { route404 } from './404';
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
        route404();
      }
    } catch {
      route404();
    }
  } else {
    route404();
  }
};
