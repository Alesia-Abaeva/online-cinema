import { combineReducers } from 'redux';
import { ViewType } from 'src/const/main-page-data';
import { AuthTypes, SliderType, UiConfigTypes, UserTypes } from './types-redux';

// TODO:  вынести интерфейсы
interface AuthState {
  login: ApiResponse<AuthResponse>;
  register: ApiResponse<AuthResponse>;
}
interface UiConfigState {
  viewType: ViewType;
  isAuth: boolean;
}

interface UserState {
  personal: ApiResponse<AuthGetPersonToken>;
  password: ApiResponse<{ message: string }>;
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

const initialSliderState: SliderState = {
  [ViewType.USER]: [],
  [ViewType.CHILD]: [],
  [ViewType.GUEST]: [],
  isLoading: false,
  error: null,
};

// ResponseFindedFullMovies

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
      return { ...state, password: { ...state.password, ...(action.payload as ApiResponse<{ message: string }>) } };
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

// Должны проверять какой action нам приходит и менять состояние
// rootReducer - изменяет все наши состояния
export const rootReducer = combineReducers({
  auth: authReducer,
  uiConfig: uiConfigReducer,
  user: userReducer,
  sliders: sliderReducer,
});
