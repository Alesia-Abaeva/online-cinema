import { apiCall } from './api';

export const getData = async <T>(options: RequestData | RequestData[], page: ApiPage) => {
  const { data } = await apiCall.get<T>(page, options);
  return { data };
};
