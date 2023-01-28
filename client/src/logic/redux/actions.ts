import { DISABLE, ENABLE } from './types-redux';

// Здесь будут храниться функции, которые создают определенные action

export const enableBtn = () => {
  return {
    type: ENABLE,
  };
};

export const disableBtn = () => {
  return {
    type: DISABLE,
  };
};
