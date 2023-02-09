import { GET_LISTS } from 'src/const/api/url';
import { backCall } from '../api';

export const getList = async (options: Options): Promise<ResponseFindedMovies | ErrorMessage> => {
  const res = await backCall.get<ResponseFindedMovies>(`${GET_LISTS}/${options.id}`, {
    page: options.page,
    limit: options.limit,
  });
  return res.data;
};
