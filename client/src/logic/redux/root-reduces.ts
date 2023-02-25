import { combineReducers } from 'redux';
import { ViewType } from 'src/const/main-page-data';
import { AuthTypes, PromocodeType, ReviewType, SliderType, UiConfigTypes, UserTypes } from './types-redux';

// TODO:  вынести интерфейсы
export interface AuthState {
  login: ApiResponse<AuthResponse>;
  register: ApiResponse<AuthResponse>;
}
export interface UiConfigState {
  viewType: ViewType;
  isAuth: boolean;
}

interface UserState {
  personal: ApiResponse<AuthGetPersonToken>;
  password: ApiResponse<CommonResponse>;
}

interface PromocodeState {
  personal: ApiResponse<PersonalPromocodeResponse>;
  activation: ApiResponse<CommonResponse>;
}

interface ReviewsState {
  personal: ApiResponse<PersonalReviewResponse>;
  film: ApiResponse<FilmReviewResponse>;
  createReview: ApiResponse<CommonResponse>;
  updateReview: ApiResponse<CommonResponse>;
  deleteReview: ApiResponse<CommonResponse>;
}

type SliderState = {
  [ViewType.USER]: ResponseFindedFullMovies[];
  [ViewType.CHILD]: ResponseFindedFullMovies[];
  [ViewType.GUEST]: ResponseFindedFullMovies[];
  isLoading: boolean;
  error: Nullable<ErrorMessage>;
};

const initialAuthState: AuthState = {
  login: { data: null, error: null, isLoading: false },
  register: { data: null, error: null, isLoading: false },
};

const initialUiConfigState: UiConfigState = {
  viewType: ViewType.GUEST,
  isAuth: false,
};

const initialUserState: UserState = {
  personal: { data: null, error: null, isLoading: false },
  password: { data: null, error: null, isLoading: false },
};

const initialPromocodeState: PromocodeState = {
  personal: { data: null, error: null, isLoading: false },
  activation: { data: null, error: null, isLoading: false },
};

const initialReviewsState: ReviewsState = {
  personal: { data: null, error: null, isLoading: false },
  film: { data: null, error: null, isLoading: false },
  createReview: { data: null, error: null, isLoading: false },
  updateReview: { data: null, error: null, isLoading: false },
  deleteReview: { data: null, error: null, isLoading: false },
};

const initialSliderState: SliderState = {
  [ViewType.USER]: [],
  [ViewType.CHILD]: [],
  [ViewType.GUEST]: [],
  isLoading: false,
  error: null,
};

const authReducer = (state = initialAuthState, action: TypesRedux) => {
  switch (action.type) {
    case AuthTypes.LOGIN:
      return { ...state, login: { ...state.login, ...(action.payload as ApiResponse<AuthResponse>) } };
    case AuthTypes.REGISTER:
      return { ...state, register: { ...state.register, ...(action.payload as ApiResponse<AuthResponse>) } };
    default:
      return state;
  }
};

const userReducer = (state = initialUserState, action: TypesRedux) => {
  switch (action.type) {
    case UserTypes.PERSON:
      return { ...state, personal: { ...state.personal, ...(action.payload as ApiResponse<AuthGetPersonToken>) } };
    case UserTypes.SET_PASS_INFO:
      return { ...state, password: { ...state.password, ...(action.payload as ApiResponse<CommonResponse>) } };
    default:
      return state;
  }
};

const uiConfigReducer = (state = initialUiConfigState, action: TypesRedux) => {
  switch (action.type) {
    case UiConfigTypes.SET_VIEW_TYPE:
      return { ...state, viewType: action.payload as ViewType };
    case UiConfigTypes.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload as boolean,
      };
    default:
      return state;
  }
};

const sliderReducer = (state = initialSliderState, action: TypesRedux) => {
  switch (action.type) {
    case SliderType.SET_SLIDER:
      return { ...state, ...(action.payload as ApiResponse<ResponseFindedFullMovies[]>) };
    default:
      return state;
  }
};

const promocodesReducer = (state = initialPromocodeState, action: TypesRedux) => {
  switch (action.type) {
    case PromocodeType.SET_PERSONAL_PROMOCODE:
      return {
        ...state,
        personal: { ...state.personal, ...(action.payload as ApiResponse<PersonalPromocodeResponse>) },
      };
    case PromocodeType.ACTIVATE_PROMOCODE:
      return { ...state, activation: { ...state.activation, ...(action.payload as ApiResponse<CommonResponse>) } };
    default:
      return state;
  }
};

const reviewsReducer = (state = initialReviewsState, action: TypesRedux) => {
  switch (action.type) {
    case ReviewType.SET_PERSONAL_REVIEWS:
      return { ...state, personal: { ...state.personal, ...(action.payload as ApiResponse<PersonalReviewResponse>) } };
    case ReviewType.SET_FILM_REVIEWS:
      return { ...state, film: { ...state.film, ...(action.payload as ApiResponse<FilmReviewResponse>) } };
    case ReviewType.CREATE_REVIEW:
      return { ...state, createReview: { ...state.createReview, ...(action.payload as ApiResponse<CommonResponse>) } };
    case ReviewType.UPDATE_REVIEW:
      return { ...state, updateReview: { ...state.updateReview, ...(action.payload as ApiResponse<CommonResponse>) } };
    case ReviewType.DELETE_REVIEW:
      return { ...state, deleteReview: { ...state.deleteReview, ...(action.payload as ApiResponse<CommonResponse>) } };
    default:
      return state;
  }
};

// Должны проверять какой action нам приходит и менять состояние
// rootReducer - изменяет все наши состояния
export const rootReducer = combineReducers({
  auth: authReducer,
  uiConfig: uiConfigReducer,
  user: userReducer,
  sliders: sliderReducer,
  promocodes: promocodesReducer,
  reviews: reviewsReducer,
});
