import { isError } from 'src/utils/type-checkers';
import { PATH_NAMES } from '../const/path-names';
import { ROUTER_PATHS } from '../const/router-paths';
import { extractPathId } from '../utils/extract-path-id';

export const dynamicRouteHandler = async (
  pathname: string,
  commonPath: string,
  fetchData: (idFilms: number) => Promise<ResponseMovie | ResErrorMes> // TODO replace function types with dynamic equivalent
) => {
  if (pathname.startsWith(commonPath)) {
    // Function that gets data for the page. It should receive ID or some last part of dynamic pathname.
    const id = extractPathId(pathname);
    const item = await fetchData(+id);
    if (!isError(item)) {
      const route = ROUTER_PATHS[commonPath];
      document.title = route.title;
      route.template(item);
    } else {
      const route = ROUTER_PATHS[PATH_NAMES.notFound];
      route.template();
      document.title = route.title;
    }
  }
};
