/* eslint-disable @typescript-eslint/ban-types */
import { paginaitonState } from 'src/const/default-query-options';
import { isError } from 'src/utils/type-checkers';
import { PATH_NAMES } from '../const/path-names';
import { ROUTER_PATHS } from '../const/router-paths';
import { extractPathId } from '../utils/extract-path-id';
import { fromQueryString } from './from-query-string';

export const dynamicRouteHandler = async (pathname: string, commonPath: string, fetchData: Function | -1) => {
  if (pathname.startsWith(commonPath)) {
    // Function that gets data for the page. It should receive ID or some last part of dynamic pathname.
    const id = extractPathId(pathname);
    const options = fromQueryString(window.location.search);
    if (options.limit && options.page) {
      paginaitonState.page = options.page;
      paginaitonState.limit = options.limit;
    }
    console.log(options);
    options.id = id;
    if (fetchData !== -1) {
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
  }
};
