import { ROUTER_PATHS } from '../const/router-paths';
import { extractPathId } from '../utils/extract-path-id';
import { findItemById } from '../utils/find-item-by-id';
import { PATH_NAMES } from '../const/path-names';

/** Рендер темплейтов страниц */
export const pathResolver = async (pathname: string): Promise<void> => {
  let route = ROUTER_PATHS[pathname] || ROUTER_PATHS[PATH_NAMES.notFound];
  if (pathname.startsWith(PATH_NAMES.films)) {
    // TEST// TEST// TEST// TEST// TEST// TEST// TEST
    let testStore: TestData[] = [];
    testStore = await (await fetch('http://localhost:3000/garage')).json();

    const film = findItemById(extractPathId(pathname), testStore);
    if (film !== -1) {
      route = ROUTER_PATHS[PATH_NAMES.films];
      document.title = route.title;
      route.template(film);
    } else {
      route = ROUTER_PATHS[PATH_NAMES.notFound];
      route.template();
      document.title = route.title;
    }
  } else {
    route.template();
    document.title = route.title;
  }
};

pathResolver(window.location.pathname);

window.addEventListener('popstate', (): void => {
  pathResolver(window.location.pathname);
});
