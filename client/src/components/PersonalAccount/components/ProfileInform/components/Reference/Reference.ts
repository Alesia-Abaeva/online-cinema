import { Accordion } from 'src/components/ui/Accordion/Accordion';
import { REFERENC_DESCRIP, REFERENC_TITLE } from 'src/const/referens';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../Handlers/arrow-btn';
import styles from './Reference.module.scss';

export const renderUserReferens = () => {
  const userProfile: HTMLElement = createElem('div', styles['profile-referens']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Справка';
  const btn = arrowBtn();
  title.append(btn);

  const data: HTMLElement = createElem('div', 'profile-info__data');

  Accordion(data, REFERENC_TITLE, REFERENC_DESCRIP);

  userProfile.append(title, data);

  return userProfile;
};
