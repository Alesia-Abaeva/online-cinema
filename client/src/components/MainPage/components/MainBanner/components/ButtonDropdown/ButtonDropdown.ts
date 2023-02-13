import { handleUpdateFolders } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { createButton } from 'src/components/ui/Button/Button';
import { ACTION_BTNS } from 'src/const/action-btns';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './ButtonDropdown.module.scss';

export const renderButtonDropdown = (filmId: number): HTMLElement => {
  const dropdown: HTMLElement = createElem('div', styles['button-dropdown']);
  dropdown.dataset.id = filmId.toString();

  ACTION_BTNS.forEach((el) => {
    const { data } = store.getState().auth.user;
    const folders = data ? data.folders : '';
    let icon = el.inactiveIcon;
    if (folders && folders[el.folderName]) {
      const folderData = folders[el.folderName];
      icon = folderData.indexOf(filmId) !== -1 ? el.activeIcon : el.inactiveIcon;
    }

    const action: HTMLElement = createButton(`${el.title}${icon}`, undefined, 'button-dropdown__item');

    if (el.folderName) {
      action.onclick = () => {
        handleUpdateFolders({ folderName: el.folderName, id: filmId });
      };
    }

    dropdown.append(action);
  });

  store.subscribe(() => {
    const { data } = store.getState().auth.user;
    const folders = data ? data.folders : '';
    const buttonCont = document.querySelector('.button-dropdown') as HTMLElement;
    if (buttonCont) {
      const buttons = Array.from(buttonCont.children);

      ACTION_BTNS.forEach((el, idx) => {
        let icon = el.inactiveIcon;
        if (folders && folders[el.folderName]) {
          const folderData = folders[el.folderName];
          icon = folderData.indexOf(filmId) !== -1 ? el.activeIcon : el.inactiveIcon;
        }
        buttons[idx].innerHTML = `${el.title}${icon}`;
      });
    }
  });

  return dropdown;
};
