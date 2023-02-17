import { handleUpdateFolders } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { createButton } from 'src/components/ui/Button/Button';
import { renderModal } from 'src/components/ui/Modal/Modal';
import { ACTION_BTNS } from 'src/const/action-btns';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { isFilmInFolder } from 'src/utils/is-film-in-folder';
import styles from './ButtonDropdown.module.scss';
import { closeDropdown } from './Handlers/close-dropdown';
import { renderAddToFolderModalContent } from './components/AddToFolderModal/AddToFolderModal';

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
    } else {
      action.onclick = () => {
        closeDropdown();
        const main = document.querySelector('.main') as HTMLElement;
        if (main) {
          const { modalFragment, modal, overlay } = renderModal(renderAddToFolderModalContent(filmId), 'modal_folders');
          main.append(modalFragment);
          setTimeout(() => toggleModal(modal, overlay), 0);
        }
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
