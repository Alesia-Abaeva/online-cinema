import { GET_COLLECTION } from 'src/const/api/url';
import { backCall } from '../api';

export const getCollection = async (options: Options): Promise<ResponseFindedFullMovies | ErrorMessage> => {
  const res = await backCall.get<ResponseFindedFullMovies>(`${GET_COLLECTION}/${options.id}`, {
    page: 1,
    limit: 40,
  });
  return res.data;
};
