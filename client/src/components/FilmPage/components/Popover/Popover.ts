import { createElem } from 'src/utils/create-element';
import styles from './Popover.module.scss';

export const renderPopover = (item: PersonDataApi): HTMLElement => {
  const popover = createElem('a', styles['popover__content']) as HTMLLinkElement;
  popover.setAttribute('href', `/person/${item.id}`);

  const popoverImg: HTMLElement = createElem('img', 'popover__img');
  const url = `${
    item.photo ? item.photo : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
  }`;
  popoverImg.setAttribute('src', url);

  const popoverDesc: HTMLElement = createElem('div', 'popover__desc');
  const popoverTitle: HTMLElement = createElem('p', 'popover__title');
  popoverTitle.innerHTML = item.name;
  const popoverSubTitle: HTMLElement = createElem('p', 'popover__sub-title');
  popoverSubTitle.innerHTML = item.enName;

  const moreInfo: HTMLElement = createElem('p', 'popover__more');
  moreInfo.innerHTML = 'подробнее...';

  popoverDesc.append(popoverTitle, popoverSubTitle, moreInfo);

  popover.append(popoverImg, popoverDesc);
  return popover;
};
