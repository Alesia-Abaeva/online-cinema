import { GET_SLIDER } from 'src/const/api/url';
import { backCall } from '../api';

export const getSlider = async (options: Options): Promise<ResponseFindedFullMovies | ErrorMessage> => {
  const res = await backCall.get<ResponseFindedFullMovies>(`${GET_SLIDER}/${options.id}`, {
    page: options.page,
    limit: options.limit,
  });
  return res.data;
};
