import { createElem } from 'src/utils/create-element';
import { renderProfileSet } from './components/MyProfile/MyProfile';
import styles from './ProfileInform.module.scss';

export const renderAccountUserData = (): HTMLElement => {
  const dataCnt: HTMLElement = createElem('div', styles['profile-info__wparr']);

  const userProfile: HTMLElement = renderProfileSet();

  dataCnt.append(userProfile);

  return dataCnt;
};
