import { combineReducers } from 'redux';
import { ViewType } from 'src/const/main-page-data';
import { AuthTypes, UiConfigTypes, UserTypes } from './types-redux';

// TODO:  вынести интерфейсы
interface AuthState {
  login: ApiResponse<AuthResponse>;
  register: ApiResponse<AuthResponse>;
}
interface UiConfigState {
  viewType: ViewType;
}

interface UserState {
  personal: ApiResponse<AuthGetPersonToken>;
  password: ApiResponse<{ message: string }>;
}

const initialAuthState: AuthState = {
  login: { data: null, error: null, isLoading: false },
  register: { data: null, error: null, isLoading: false },
};

const initialUiConfigState: UiConfigState = {
  viewType: ViewType.GUEST,
};

const initialUserState: UserState = {
  personal: { data: null, error: null, isLoading: false, isAuth: false },
  password: { data: null, error: null, isLoading: false },
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
      return { ...state, password: { ...state.password, ...(action.payload as ApiResponse<{ message: string }>) } };
    // case UserTypes.ERROR_PASS:
    //   return { ...state, user: { ...state.user, error: action.payload as ErrorMessage } };
    default:
      return state;
  }
};

const uiConfigReducer = (state = initialUiConfigState, action: TypesRedux) => {
  switch (action.type) {
    case UiConfigTypes.SET_VIEW_TYPE:
      return { ...state, viewType: action.payload as ViewType };
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
});
