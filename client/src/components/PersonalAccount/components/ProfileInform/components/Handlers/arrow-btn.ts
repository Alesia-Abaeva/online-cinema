import { createElem } from 'src/utils/create-element';

export const arrowBtn = () => {
  const arr = createElem('div', 'profile-button');

  arr.onclick = () => {
    const div = document.querySelector('.personal-account');
    const theme = div?.classList.contains('show-personal') ? 'show-personal' : 'hide-personal';
    const newTheme = div?.classList.contains('show-personal') ? 'hide-personal' : 'show-personal';
    div?.classList.remove(`${theme}`);
    div?.classList.add(`${newTheme}`);
  };
  return arr;
};
