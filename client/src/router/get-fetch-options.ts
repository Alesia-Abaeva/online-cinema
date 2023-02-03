// import { DEFAULT_OPTIONS } from 'src/const/default-query-options';
import { extractPathId } from 'src/utils/extract-path-id';
import { fromQueryString } from './from-query-string';

export const getFetchOptions = (): Options => {
  const options: Options = {};
  const id = extractPathId(window.location.pathname);
  const queryOptions = fromQueryString(window.location.search);

  options.page = queryOptions.page;
  options.limit = queryOptions.limit;
  options.id = id;
  return options;
};
