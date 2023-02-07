import { dataPersonHandler, loginHandler, registerHandler } from 'src/api/back/auth';
// import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { AppDispatch } from '.';
import { AuthTypes } from './types-redux';

// Здесь будут храниться функции, которые создают определенные action

const setLoginInfo = (payload: ApiResponse<AuthResponse>) => {
  return {
    type: AuthTypes.LOGIN,
    payload,
  };
};

const setRegisterInfo = (payload: ApiResponse<AuthResponse>) => {
  return {
    type: AuthTypes.REGISTER,
    payload,
  };
};

export const setUserInfo = (payload: ApiResponse<AuthGetPersonToken>) => {
  return {
    type: AuthTypes.PERSON,
    payload,
  };
};

export const login = (body: AuthRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoginInfo({ isLoading: true }));
    const { data } = await loginHandler(body);
    dispatch(setLoginInfo({ error: null, data, isLoading: false, isAuth: true }));
  } catch (e) {
    dispatch(setLoginInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

export const register = (body: AuthRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setRegisterInfo({ isLoading: true }));
    const { data } = await registerHandler(body);
    dispatch(setRegisterInfo({ error: null, data, isLoading: false, isAuth: true }));
  } catch (e) {
    dispatch(setRegisterInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

export const getDataPerson = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setUserInfo({ isLoading: true }));
    const data = await dataPersonHandler();
    dispatch(setUserInfo({ error: null, data: data.data, isLoading: false, isAuth: true }));
  } catch (e) {
    dispatch(setUserInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
    // localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
  }
};

export const setPasswordError = (payload: ErrorMessage) => {
  return {
    type: AuthTypes.ERROR_PASS,
    payload,
  };
};
