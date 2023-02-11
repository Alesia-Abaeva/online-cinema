import { createElem } from 'src/utils/create-element';
import styles from './Accordion.module.scss';

export const Accordion = (
  container: HTMLElement,
  title: Record<ReferenceTypes | string, string>,
  discriptions: Record<ReferenceTypes, string>
) => {
  Object.entries(title).forEach(([key, value]) => {
    const productDataDescriptions: HTMLElement = createElem('div', 'referens__data-item');
    productDataDescriptions.classList.add('item-descriprions');
    const dataDescriptionsTitle: HTMLElement = createElem('div', 'referens__data-item-title');
    const descriptionsTitle: HTMLElement = createElem('span', 'show-descriptions');
    // заголовки
    descriptionsTitle.innerHTML = value;
    dataDescriptionsTitle.append(descriptionsTitle);
    // описание раздела
    const dataDescriptionsBody: HTMLElement = createElem('div', 'referens__data-item-body');
    const prodContant: HTMLElement = createElem('div', 'referens__content');
    const dataDescriptionsContent: HTMLElement = createElem('div', 'content__data-item');
    const contentItem: HTMLElement = createElem('span', 'content-item');
    contentItem.innerHTML = discriptions[key as unknown as ReferenceTypes];

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
    productDataDescriptions.append(dataDescriptionsTitle, dataDescriptionsBody);
    // добавляем в родителя аккордион
    container.append(productDataDescriptions);
  });
};
