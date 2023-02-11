import { createButton } from 'src/components/ui/Button/Button';
import { addToFolder, bookmarkIcon, bookmarkIconChecked, eyeClosed, eyeOpen } from 'src/const/icons/icons';
import { createElem } from 'src/utils/create-element';
import styles from './ButtonDropdown.module.scss';

export const renderButtonDropdown = (): HTMLElement => {
  const dropdown: HTMLElement = createElem('div', styles['button-dropdown']);

  const actions = [
    { title: 'Просмотрен', activeIcon: `${eyeOpen}`, inactiveIcon: `${eyeClosed}` },
    { title: 'Буду смотреть', activeIcon: `${bookmarkIconChecked}`, inactiveIcon: `${bookmarkIcon}` },
    { title: 'Добавить в папку', activeIcon: `${addToFolder}`, inactiveIcon: `${addToFolder}` },
  ];

  actions.forEach((el) => {
    const action: HTMLElement = createButton(
      `${el.title}${el.inactiveIcon}`,
      () => console.log(''),
      'button-dropdown__item'
    );
    dropdown.append(action);
  });

  return dropdown;
};
