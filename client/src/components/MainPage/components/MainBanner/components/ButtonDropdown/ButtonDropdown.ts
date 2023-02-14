import { handleUpdateFolders } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { createButton } from 'src/components/ui/Button/Button';
import { ACTION_BTNS } from 'src/const/action-btns';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { isFilmInFolder } from 'src/utils/is-film-in-folder';
import styles from './ButtonDropdown.module.scss';

export const renderButtonDropdown = (filmId: number): HTMLElement => {
  const dropdown: HTMLElement = createElem('div', styles['button-dropdown']);
  dropdown.dataset.id = filmId.toString();

  ACTION_BTNS.forEach((el) => {
    const icon = isFilmInFolder(filmId, el.folderName) ? el.activeIcon : el.inactiveIcon;

    const action: HTMLElement = createButton(`${el.title}${icon}`, undefined, 'button-dropdown__item');

    if (el.folderName) {
      action.onclick = () => {
        handleUpdateFolders({ folderName: el.folderName, id: filmId });
      };
    }

    dropdown.append(action);
  });

  store.subscribe(() => {
    const buttonCont = document.querySelector('.button-dropdown') as HTMLElement;
    if (buttonCont) {
      const buttons = Array.from(buttonCont.children);

      ACTION_BTNS.forEach((el, idx) => {
        const icon = isFilmInFolder(filmId, el.folderName) ? el.activeIcon : el.inactiveIcon;
        buttons[idx].innerHTML = `${el.title}${icon}`;
      });
    }
  });

  return dropdown;
};
