import { Igallery } from 'src/const/gallery-data';
import { createElem } from 'src/utils/create-element';

export const createPartOfGallery = (partData: Igallery[], element: HTMLElement): void => {
  for (let i = 0; i < partData.length; i += 2) {
    const imgGroup = createElem('div', 'gallery__group') as HTMLElement;
    partData.slice(i, i + 2).forEach((elem) => {
      const img = createElem('img', 'gallery__img') as HTMLImageElement;
      img.src = elem.url;
      imgGroup.append(img);
    });
    element.append(imgGroup);
  }
};
