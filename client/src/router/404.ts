import { PATH_NAMES } from 'src/const/path-names';
import { ROUTER_PATHS } from 'src/const/router-paths';

export const route404 = (): void => {
  const route = ROUTER_PATHS[PATH_NAMES.notFound];
  route.template();
  document.title = route.title;
};
