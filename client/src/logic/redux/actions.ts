import { backCall } from 'src/api/api';
import {
  dataPersonHandler,
  loginHandler,
  registerHandler,
  updateParentsControl,
  updateUserPass,
} from 'src/api/back/auth';
import { getSlider } from 'src/api/back/slider';
import { handleChangeTariff } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { PROMOCODE, PROMOCODE_PERSONAL, REVIEW, REVIEW_FOR_FILM } from 'src/const/api/url';
import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { SLIDERS, SlidersSetsData, ViewType } from 'src/const/main-page-data';
import { Tariff } from 'src/const/subscriptions-data';
import { AppDispatch, RootState } from '.';
import { setLocalStorage } from '../local-storage/local-storage';
import { AgeTypes, AuthTypes, PromocodeType, ReviewType, SliderType, UiConfigTypes, UserTypes } from './types-redux';

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

export const setPersonReview = (payload: ApiResponse<PersonalReviewResponse>) => {
  return {
    type: ReviewType.SET_PERSONAL_REVIEWS,
    payload,
  };
};

export const setFilmReview = (payload: ApiResponse<FilmReviewResponse>) => {
  return {
    type: ReviewType.SET_FILM_REVIEWS,
    payload,
  };
};

export const setCreateReview = (payload: ApiResponse<CommonResponse>) => {
  return {
    type: ReviewType.CREATE_REVIEW,
    payload,
  };
};

export const setUpdateReview = (payload: ApiResponse<CommonResponse>) => {
  return {
    type: ReviewType.UPDATE_REVIEW,
    payload,
  };
};

export const setDeleteReview = (payload: ApiResponse<CommonResponse>) => {
  return {
    type: ReviewType.DELETE_REVIEW,
    payload,
  };
};

export const setActivationPromocode = (payload: ApiResponse<CommonResponse>) => {
  return {
    type: PromocodeType.ACTIVATE_PROMOCODE,
    payload,
  };
};

export const setPersonalPromocode = (payload: ApiResponse<PersonalPromocodeResponse>) => {
  return {
    type: PromocodeType.SET_PERSONAL_PROMOCODE,
    payload,
  };
};

export const setPasswordInfo = (payload: ApiResponse<CommonResponse>) => {
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
    dispatch(setUserInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
    dispatch(setLogoutState());
  }
};

export const login = (body: AuthRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoginInfo({ isLoading: true }));
    const { data: loginData } = await loginHandler(body);

    dispatch(setLoginState(loginData?.token));
    const { data: personData } = await dataPersonHandler();

    dispatch(setViewType(ViewType.USER));
    dispatch(setUserInfo({ error: null, data: personData, isLoading: false }));

    dispatch(setLoginInfo({ error: null, data: loginData, isLoading: false }));
  } catch (e) {
    dispatch(setLoginInfo({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

export const register = (body: AuthRequest) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setRegisterInfo({ isLoading: true }));
    const { data } = await registerHandler(body);

    dispatch(setLoginState(data?.token));
    const { data: personData } = await dataPersonHandler();
    dispatch(setViewType(ViewType.USER));
    dispatch(setUserInfo({ error: null, data: personData, isLoading: false }));

    dispatch(setRegisterInfo({ error: null, data, isLoading: false }));
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

/** Получить все отзывы пользователя (айди берется из токена на беке) */
export const fetchPersonalReviews = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setPersonReview({ isLoading: true }));

    const { data } = await backCall.get<PersonalReviewResponse>(REVIEW);

    // TODO: получить информацию о фильме, расширить модель стейта

    dispatch(setPersonReview({ error: null, data, isLoading: false }));
  } catch (e) {
    dispatch(setPersonReview({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

/** Получить все отзывы по фильму */
export const fetchFilmReviews = (filmId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setFilmReview({ isLoading: true }));

    const { data } = await backCall.get<FilmReviewResponse>(`${REVIEW_FOR_FILM}/${filmId}`);

    dispatch(setFilmReview({ error: null, data, isLoading: false }));
  } catch (e) {
    dispatch(setFilmReview({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

/** Создание отзыва, передаем айди фильма с основной информацией об отзыве */
export const createReview = (review: CreateReviewRequest) => async (dispatch: AppDispatch) => {
  try {
    // TODO: придумать способ очищать data на скрытие всплывающей нотификации об успешном обновлении отзыва
    dispatch(setCreateReview({ data: null, isLoading: true }));

    const { data } = await backCall.put<CreateReviewRequest, CommonResponse>(REVIEW, review);

    dispatch(setCreateReview({ error: null, data, isLoading: false }));
  } catch (e) {
    dispatch(setCreateReview({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

/** Обновление отзыва, передаем айди отзыва с основной информацией об отзыве */
export const updateReview = (review: UpdateReviewRequest) => async (dispatch: AppDispatch) => {
  try {
    // TODO: придумать способ очищать data на скрытие всплывающей нотификации об успешном обновлении отзыва
    dispatch(setUpdateReview({ data: null, isLoading: true }));

    const { data } = await backCall.post<UpdateReviewRequest, CommonResponse>(REVIEW, review);

    dispatch(setUpdateReview({ error: null, data, isLoading: false }));
  } catch (e) {
    dispatch(setUpdateReview({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

/** Удаление отзыва */
export const deleteReview = (reviewId: string) => async (dispatch: AppDispatch) => {
  try {
    // TODO: придумать способ очищать data на скрытие всплывающей нотификации об успешном обновлении отзыва
    dispatch(setDeleteReview({ data: null, isLoading: true }));

    const { data } = await backCall.delete<CommonResponse>(`${REVIEW}/${reviewId}`);

    dispatch(setDeleteReview({ error: null, data, isLoading: false }));
  } catch (e) {
    dispatch(setDeleteReview({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

/** Получить персональный промокод, айди берется из токена на беке */
export const getPersonalPromocode = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setPersonalPromocode({ isLoading: true }));

    const { data } = await backCall.get<PersonalPromocodeResponse>(PROMOCODE_PERSONAL);

    dispatch(setPersonalPromocode({ error: null, data, isLoading: false }));
  } catch (e) {
    dispatch(setPersonalPromocode({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

/** Активировать промокод */
export const activatePromocode = (code: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setActivationPromocode({ data: null, isLoading: true }));

    const { data } = await backCall.post<ActivationPromocodeRequest, CommonResponse>(PROMOCODE, { code });

    await handleChangeTariff({ tariff: Tariff.PREMIUM });

    dispatch(setPersonalPromocode({ error: null, data: null, isLoading: false }));
    dispatch(setActivationPromocode({ error: null, data, isLoading: false }));
  } catch (e) {
    dispatch(setActivationPromocode({ error: e as ErrorMessage, data: null, isLoading: false }));
  }
};

// TODO: ПРИ РЕГИСТРАЦИИ СТАВИТЬ ДЕФОЛТНОЕ РОДИТЕЛЬСКОЕ ПОЛЕ
