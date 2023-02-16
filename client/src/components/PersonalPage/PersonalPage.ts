import { DEFAULT_FOLDERS } from 'src/const/default-folders';
import { createElem } from 'src/utils/create-element';
import { renderSlider } from '../MainPage/components/Slider/Slider';
import { addListenerSlideDown } from '../MainPage/sliderActions';
import { renderModal } from '../ui/ModalFilm/ModalFilm';
import { renderUserFolders } from './components/UserFolders/UserFolders';
import styles from './PersonalPage.module.scss';

export const renderPersonal = (
  folders: ResponseFolder[] | undefined,
  userFolders: ResponseUserFolder[] | undefined
): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');

  const { container } = renderModal();

  const slidersCont: HTMLElement = createElem('div', 'sliders-container');

  if (folders) {
    folders.forEach((el) => {
      const sliderData = el.data;
      const keyword = el.folderName as DefaultFoldersNames;
      const displayedTitle = DEFAULT_FOLDERS[keyword];

      const renderSliderData = sliderData.reverse().slice(0, 10);
      const slider: HTMLElement = addListenerSlideDown(
        renderSlider(renderSliderData, displayedTitle, el.folderName),
        'folder'
      );
      slider.id = el.folderName;
      slidersCont.append(slider);
    });
  }

  main.append(slidersCont);

  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['personal']);

  const foldersCont: HTMLElement = renderUserFolders(userFolders);

  mainContent.append(foldersCont);
  mainContainer.append(mainContent);
  main.append(mainContainer, container);

  return main;
};
