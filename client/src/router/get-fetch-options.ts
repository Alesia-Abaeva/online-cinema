import { extractAfterLastSlash } from 'src/utils/extract-after-last-slash';
import { fromQueryString } from './from-query-string';

export const getFetchOptions = (): Options => {
  const options: Options = {};
  const id = extractAfterLastSlash(window.location.pathname);
  const queryOptions = fromQueryString(window.location.search);

  options.page = queryOptions.page;
  options.limit = queryOptions.limit;
  options.id = id;
  return options;
};
