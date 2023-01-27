import { apiCall } from './api';

export const getFimlForID = async (options: RequestData, page: ApiPage) => {
  const { data, response } = await apiCall.get(page, options);
  return { data, response: response.headers.get('X-Total-Count') };
};
