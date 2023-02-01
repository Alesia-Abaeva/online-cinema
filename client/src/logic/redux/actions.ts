import { loginHandler } from 'src/api/back/auth';
import { AppDispatch } from '.';
import { AuthTypes } from './types-redux';

// Здесь будут храниться функции, которые создают определенные action

const setLoginInfo = (payload: ApiResponse<AuthResponse>) => {
  return {
    type: AuthTypes.LOGIN,
    payload,
  };
};

// const setRegisterInfo = (payload: ApiResponse<AuthResponse>) => {
//   return {
//     type: AuthTypes.REGISTER,
//     payload,
//   };
// };

export const login = (body: AuthRequest) => async (dispatch: AppDispatch) => {
  try {
    // оформляем загрузку
    dispatch(setLoginInfo({ isLoading: true }));
    // получить данные
    const { data } = await loginHandler(body);
    // оформляем ответ успешный
    // оформляем конец загрузки
    dispatch(setLoginInfo({ error: null, data, isLoading: false }));
  } catch (e) {
    // оформляем ошибку
    // оформляем конец загрузки
    dispatch(setLoginInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};
