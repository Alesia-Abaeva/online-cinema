import { createElem } from 'src/utils/create-element';
import { renderSlider } from '../MainPage/components/Slider/Slider';
import { addListenerSlideDown } from '../MainPage/sliderActions';
import styles from './PersonalPage.module.scss';

export const renderPersonal = (
  folders: ResponseFolder[] | undefined,
  userFolders: ResponseUserFolder[] | undefined
): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['personal']);

  console.log(folders, userFolders);
  if (folders) {
    folders.forEach((el) => {
      const sliderData = el.data;
      let displayedTitle = 'Коллекция';
      if (el.folderName === 'bookmarks') displayedTitle = 'Закладки';
      else if (el.folderName === 'watched') displayedTitle = 'Просмотрено';
      else if (el.folderName === 'watchedRecenlty') displayedTitle = 'Просмотрено недавано';

      const slider: HTMLElement = addListenerSlideDown(renderSlider(sliderData, displayedTitle, el.folderName));
      main.append(slider);
    });
  }

  // mainContent.append();

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
