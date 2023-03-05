import { removeOverlay } from 'src/utils/remove-overlay';

export const closeDropdown = () => {
  const dropdown = document.querySelector('.button-dropdown') as HTMLElement;
  dropdown.remove();
  removeOverlay('dropdown-overlay');
};
