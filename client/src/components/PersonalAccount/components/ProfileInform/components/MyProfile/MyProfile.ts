import { createElem } from 'src/utils/create-element';
import { renderProfileData } from './components/Profile/MyProfileData';
import { renderProfileDataPass } from './components/ProfilePass/MyProfilePass';
import styles from './MyProfile.module.scss';

export const renderProfileSet = (): HTMLElement => {
  const userProfile: HTMLElement = createElem('div', styles['profile-info']);

  const { data: personaldata, title: dataTitle } = renderProfileData();
  const { data: personalPass, title: passTitle } = renderProfileDataPass();

  userProfile.append(dataTitle, personaldata, passTitle, personalPass);
  return userProfile;
};
