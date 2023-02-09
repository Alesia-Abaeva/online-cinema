import { combineReducers } from 'redux';
import { AuthTypes } from './types-redux';

interface AuthState {
  login: ApiResponse<AuthResponse>;
  register: ApiResponse<AuthResponse>;
  user: ApiResponse<AuthGetPersonToken>;
}

const initialState: AuthState = {
  login: { data: null, error: null, isLoading: false },
  register: { data: null, error: null, isLoading: false },
  user: { data: null, error: null, isLoading: false, isAuth: false },
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action: TypesRedux) => {
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

// Должны проверять какой action нам приходит и менять состояние
// rootReducer - изменяет все наши состояния
export const rootReducer = combineReducers({
  auth: authReducer,
});
