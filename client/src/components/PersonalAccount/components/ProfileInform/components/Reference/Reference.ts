import { REFERENC_DESCRIP, REFERENC_TITLE } from 'src/const/referens';
import { createElem } from 'src/utils/create-element';
import styles from './Reference.module.scss';

export const renderUserReferens = () => {
  const userProfile: HTMLElement = createElem('div', styles['profile-referens']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Справка';

  const data: HTMLElement = createElem('div', 'profile-info__data');

  Object.entries(REFERENC_TITLE).forEach(([key, value]) => {
    const productDataDescriptions: HTMLElement = createElem('div', 'referens__data-item');
    productDataDescriptions.classList.add('item-descriprions');
    const dataDescriptionsTitle: HTMLElement = createElem('div', 'referens__data-item-title');
    const descriptionsTitle: HTMLElement = createElem('span', 'show-descriptions');
    descriptionsTitle.innerHTML = value;
    dataDescriptionsTitle.append(descriptionsTitle);
    // описание раздела
    const dataDescriptionsBody: HTMLElement = createElem('div', 'referens__data-item-body');
    const prodContant: HTMLElement = createElem('div', 'referens__content');
    const dataDescriptionsContent: HTMLElement = createElem('div', 'content__data-item');
    const contentItem: HTMLElement = createElem('span', 'content-item');
    contentItem.innerHTML = REFERENC_DESCRIP[key as unknown as ReferenceTypes];

    dataDescriptionsTitle.onclick = () => {
      descriptionsTitle.classList.toggle(styles['active-desc']);
      dataDescriptionsBody.classList.toggle('show_content');

      if (dataDescriptionsBody.classList.contains('show_content')) {
        dataDescriptionsBody.style.height = `${dataDescriptionsBody.scrollHeight}px`;
      } else dataDescriptionsBody.style.height = '0px';
    };

    dataDescriptionsContent.append(contentItem);
    prodContant.append(dataDescriptionsContent);
    dataDescriptionsBody.append(prodContant);
    //
    productDataDescriptions.append(dataDescriptionsTitle, dataDescriptionsBody);
    data.append(productDataDescriptions);
  });

  userProfile.append(title, data);

  return userProfile;
};
