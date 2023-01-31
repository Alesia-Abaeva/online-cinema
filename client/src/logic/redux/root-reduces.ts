import { combineReducers } from 'redux';
import { DISABLE, ENABLE } from './types-redux';

const initialTheme = {
  value: 'ligth',
  disabled: false,
}; // тестовое начальное значение - TODO - изменить и перенести

function themeReducer(action: TypesRedux, state = initialTheme) {
  switch (action.type) {
    case ENABLE:
      return { ...state, disabled: false };
    case DISABLE:
      return { ...state, disabled: true };
    default:
      return state;
  }
  return state;
} // TODO - поменять под наш функционал ТЕСТ

// Должны проверять какой action нам приходит и менять состояние

// rootReducer - изменяет все наши состояния
export const rootReducer = combineReducers({
  theme: themeReducer,
});
