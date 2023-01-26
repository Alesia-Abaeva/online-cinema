import { PATH_NAMES } from '../const/path-names';
import { ROUTER_PATHS } from '../const/router-paths';
import { extractPathId } from '../utils/extract-path-id';

export const dynamicRouteHandler = async (
  pathname: string,
  commonPath: string,
  fetchData: (id: number | string) => Promise<TestData | -1> // TODO replace function types with dynamic equivalent
) => {
  if (pathname.startsWith(commonPath)) {
    // Function that gets data for the page. It should receive ID or some last part of dynamic pathname.
    const id = extractPathId(pathname);
    const item = await fetchData(id);
    if (item !== -1) {
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
