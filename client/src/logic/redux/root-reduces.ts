/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import { AuthTypes, Modals, UiConfigTypes } from './types-redux';

interface AuthState {
  login: ApiResponse<AuthResponse>;
  register: ApiResponse<AuthResponse>;
  user: ApiResponse<AuthGetPersonToken>;
}

interface UiConfigState {
  modal: Nullable<Modals>;
}

const initialAuthState: AuthState = {
  login: { data: null, error: null, isLoading: false },
  register: { data: null, error: null, isLoading: false },
  user: { data: null, error: null, isLoading: false, isAuth: false },
};

const initialUiConfigState: UiConfigState = {
  modal: null,
};

const authReducer = (state = initialAuthState, action: TypesRedux) => {
  switch (action.type) {
    case AuthTypes.LOGIN:
      return { ...state, login: { ...state.login, ...(action.payload as ApiResponse<AuthResponse>) } };
    case AuthTypes.REGISTER:
      return { ...state, register: { ...state.register, ...(action.payload as ApiResponse<AuthResponse>) } };
    case AuthTypes.PERSON:
      return { ...state, user: { ...state.user, ...(action.payload as ApiResponse<AuthGetPersonToken>) } };
    case AuthTypes.ERROR_PASS:
      return { ...state, user: { ...state.user, error: action.payload as ErrorMessage } };
    default:
      return state;
  }
};

const uiConfigReducer = (state = initialUiConfigState, action: TypesRedux) => {
  switch (action.type) {
    case UiConfigTypes.SET_MODAL:
      return { ...state, modal: action.payload as Nullable<Modals> };
    default:
      return state;
  }
};

// Должны проверять какой action нам приходит и менять состояние
// rootReducer - изменяет все наши состояния
export const rootReducer = combineReducers({
  auth: authReducer,
  uiConfig: uiConfigReducer,
});
