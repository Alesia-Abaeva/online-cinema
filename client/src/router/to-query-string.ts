export const toQueryString = (options: Options): string => {
  const allFiltersArr = Object.entries(options);
  let querystring = '';

  allFiltersArr.forEach((filter) => {
    querystring = `${querystring}&${filter[0]}=${filter[1]}`;
  });
  querystring = `?${querystring.slice(1)}`;
  window.history.replaceState(null, '', querystring);
  return querystring;
};
