import {
  dataPersonHandler,
  loginHandler,
  registerHandler,
  updateParentsControl,
  updateUserPass,
} from 'src/api/back/auth';
import { getSlider } from 'src/api/back/slider';
import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { SLIDERS, SlidersSetsData, ViewType } from 'src/const/main-page-data';
import { AppDispatch, RootState } from '.';
import { setLocalStorage } from '../local-storage/local-storage';
import { AgeTypes, AuthTypes, SliderType, UiConfigTypes, UserTypes } from './types-redux';

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
    type: UserTypes.PERSON,
    payload,
  };
};

export const setPasswordInfo = (payload: ApiResponse<{ message: string }>) => {
  return {
    type: UserTypes.SET_PASS_INFO,
    payload,
  };
};

export const setViewType = (payload: ViewType) => {
  return {
    type: UiConfigTypes.SET_VIEW_TYPE,
    payload,
  };
};

export const setSliders = (payload: ApiResponse<ResponseFindedFullMovies[]>) => {
  return {
    type: SliderType.SET_SLIDER,
    payload,
  };
};

export const setAuth = (payload: boolean) => {
  return {
    type: UiConfigTypes.SET_AUTH,
    payload,
  };
};

export const setLoginState = (token?: string) => {
  setLocalStorage(String(token), LOCAL_STORAGE_KEYS.TOKEN);

  return setAuth(!!token);
};

export const setLogoutState = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);

  return setAuth(false);
};

export const getDataPerson = (token: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setUserInfo({ isLoading: true }));
    const { data } = await dataPersonHandler();
    dispatch(setLoginState(token));
    dispatch(setViewType(data.parentControls === AgeTypes.PARENT ? ViewType.USER : ViewType.CHILD));
    dispatch(setUserInfo({ error: null, data, isLoading: false }));
  } catch (e) {
    // remove key
    dispatch(setUserInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

export const login = (body: AuthRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoginInfo({ isLoading: true }));
    const { data } = await loginHandler(body);

    dispatch(setLoginInfo({ error: null, data, isLoading: false }));

    dispatch(setLoginState(data?.token));

    dispatch(setViewType(ViewType.USER));
    dispatch(getDataPerson(data?.token));
  } catch (e) {
    dispatch(setLoginInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

export const register = (body: AuthRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setRegisterInfo({ isLoading: true }));
    const { data } = await registerHandler(body);
    dispatch(setLoginState(data?.token));
    dispatch(setRegisterInfo({ error: null, data, isLoading: false }));
    dispatch(setViewType(ViewType.USER));
    dispatch(getDataPerson(data?.token));
  } catch (e) {
    dispatch(setRegisterInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

export const changePassword = (body: AuthGetPersonToken) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setPasswordInfo({ data: null, isLoading: true }));
    const { data } = await updateUserPass(body);
    dispatch(setPasswordInfo({ error: null, data, isLoading: false }));
  } catch (e) {
    dispatch(setPasswordInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

export const getSliders = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSliders({ isLoading: true }));

    const views = Object.entries(SLIDERS);

    const sliderResponse: {
      [ViewType.CHILD]: ResponseFindedFullMovies[];
      [ViewType.GUEST]: ResponseFindedFullMovies[];
      [ViewType.USER]: ResponseFindedFullMovies[];
    } = { [ViewType.CHILD]: [], [ViewType.GUEST]: [], [ViewType.USER]: [] };

    await Promise.all(
      (views as [ViewType, SlidersSetsData[]][]).map(async ([viewType, sliderSet]) => {
        const sliderSets = await Promise.all(
          sliderSet.map(async ({ title }) => await getSlider({ id: title, page: 1, limit: 10 }))
        );
        sliderResponse[viewType] = sliderSets as ResponseFindedFullMovies[];

        return sliderSets;
      })
    );

    dispatch(setSliders({ error: null, isLoading: false, ...sliderResponse }));
  } catch (e) {
    dispatch(setSliders({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

export const changeParentControl = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const { viewType } = getState().uiConfig;
    dispatch(setUserInfo({ isLoading: true }));

    const { data } = await updateParentsControl({
      parentControls: viewType === ViewType.CHILD ? AgeTypes.PARENT : AgeTypes.CHILD,
    });

    const newViewType = data.parentControls === AgeTypes.PARENT ? ViewType.USER : ViewType.CHILD;

    dispatch(setUserInfo({ error: null, data, isLoading: false }));
    dispatch(setViewType(newViewType));
  } catch (e) {
    dispatch(setUserInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

// TODO: ПРИ РЕГИСТРАЦИИ СТАВИТЬ ДЕФОЛТНОЕ РОДИТЕЛЬСКОЕ ПОЛЕ
