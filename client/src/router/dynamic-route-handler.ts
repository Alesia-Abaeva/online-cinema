/* eslint-disable @typescript-eslint/ban-types */
import { isError } from 'src/utils/type-checkers';
import { PATH_NAMES } from '../const/path-names';
import { ROUTER_PATHS } from '../const/router-paths';
import { getFetchOptions } from './get-fetch-options';

export const dynamicRouteHandler = async (pathname: string, commonPath: string, fetchData: Function | -1) => {
  if (pathname.startsWith(commonPath) && fetchData !== -1) {
    const options = getFetchOptions();
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
  }
};
