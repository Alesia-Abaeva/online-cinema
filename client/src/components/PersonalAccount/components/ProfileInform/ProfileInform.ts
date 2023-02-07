import { createElem } from 'src/utils/create-element';
import { renderProfileSet } from './components/MyProfile/MyProfile';
// import { renderUserWatch } from './components/MyWatch/UserWatch';
import styles from './ProfileInform.module.scss';

export const renderAccountUserData = (func?: () => HTMLElement) => {
  const dataCnt: HTMLElement = createElem('div', styles['profile-info__wparr']);
  const userProfile = func ? func() : renderProfileSet();
  // const userProfile = func ? func() : renderProfileSet();

  // const userProfile: HTMLElement = renderProfileSet();
  // const userProfile: HTMLElement = renderUserWatch();

  dataCnt.append(userProfile);

  return dataCnt;
};
