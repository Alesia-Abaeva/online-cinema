import { GET_SLIDER } from 'src/const/api/url';
import { backCall } from '../api';

export const getSlider = async (options: Options): Promise<ResponseFindedFullMovies | ErrorMessage> => {
  const res = await backCall.get<ResponseFindedFullMovies>(`${GET_SLIDER}/${options.id}`, {
    page: 1,
    limit: 40,
  });
  return res.data;
};
