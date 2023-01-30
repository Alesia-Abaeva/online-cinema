import { DEBOUNCE_DELAY } from '../const/debounce-delay';

/* eslint-disable @typescript-eslint/ban-types */
export const debounce = (fn: Function, delay = DEBOUNCE_DELAY) => {
  let timeoutId: NodeJS.Timer;
  return (...args: Event[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
