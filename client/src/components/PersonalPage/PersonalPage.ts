import { DEFAULT_FOLDERS } from 'src/const/default-folders';
import { createElem } from 'src/utils/create-element';
import { renderSlider } from '../MainPage/components/Slider/Slider';
import { addListenerSlideDown } from '../MainPage/sliderActions';
import { renderModal } from '../ui/ModalFilm/ModalFilm';
import styles from './PersonalPage.module.scss';

export const renderPersonal = (
  folders: ResponseFolder[] | undefined,
  userFolders: ResponseUserFolder[] | undefined
): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  console.log(folders, userFolders);

  const { container } = renderModal();

  if (folders) {
    folders.forEach((el) => {
      const sliderData = el.data;
      const keyword = el.folderName as DefaultFoldersNames;
      const displayedTitle = DEFAULT_FOLDERS[keyword];

      const slider: HTMLElement = addListenerSlideDown(
        renderSlider(sliderData, displayedTitle, el.folderName),
        'folder'
      );
      if (el.folderName === 'bookmarks') slider.id = el.folderName;
      main.append(slider);
    });
  }

  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['personal']);
  mainContainer.append(mainContent);
  main.append(mainContainer, container);

  return main;
};
