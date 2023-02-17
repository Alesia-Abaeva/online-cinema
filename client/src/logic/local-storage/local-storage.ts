import { EmptyObject } from 'redux';
import { store } from '../redux';
import { AuthState, UiConfigState } from '../redux/root-reduces';

export const setLocalStorage = (value: string, key: string): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const storageItem = localStorage.getItem(key);
  if (!storageItem) {
    return null;
  }

  return JSON.parse(storageItem);
};

export const loadState = ():
  | (EmptyObject & {
      auth: AuthState;
      uiConfig: UiConfigState;
    })
  | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (
  state: EmptyObject & {
    auth: AuthState;
    uiConfig: UiConfigState;
  }
): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});
