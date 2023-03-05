import { addToFolder, bookmarkIcon, bookmarkIconChecked, eyeClosed, eyeOpen } from './icons/icons';

export const ACTION_BTNS = [
  { folderName: 'watched', title: 'Просмотрен', activeIcon: `${eyeOpen}`, inactiveIcon: `${eyeClosed}` },
  {
    folderName: 'bookmarks',
    title: 'Буду смотреть',
    activeIcon: `${bookmarkIconChecked}`,
    inactiveIcon: `${bookmarkIcon}`,
  },
  {
    folderName: '',
    title: 'Добавить в папку',
    activeIcon: `${addToFolder}`,
    inactiveIcon: `${addToFolder}`,
  },
];
