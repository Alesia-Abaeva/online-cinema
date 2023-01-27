import { apiCall } from './api';

export const getData = async (options: RequestData, page: ApiPage) => {
  const { data } = await apiCall.get(page, options);
  return data;
};

// export const getData = async <T>(options: RequestData, page: ApiPage) => {
//   const { data } = await apiCall.get<T>(page, options);
//   return data;
// };

// const getMovie = () => getData<null>()
