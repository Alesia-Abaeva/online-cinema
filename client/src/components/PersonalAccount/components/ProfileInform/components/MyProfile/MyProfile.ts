import { createButton } from 'src/components/ui/Button/Button';
import { createElem } from 'src/utils/create-element';
import { handleDelete } from '../Handlers/handlersChangeUserData';
import { renderProfileData } from './components/Profile/MyProfileData';
import { renderProfileDataPass } from './components/ProfilePass/MyProfilePass';
import styles from './MyProfile.module.scss';

export const renderProfileSet = (): HTMLElement => {
  const userProfile: HTMLElement = createElem('div', styles['profile-info']);

  const { data: personaldata, title: dataTitle } = renderProfileData();
  const { data: personalPass, title: passTitle } = renderProfileDataPass();
  const deleteBnt = createButton('Удалить аккаунт', handleDelete, 'button-delete');

  userProfile.append(dataTitle, personaldata, passTitle, personalPass, deleteBnt);
  return userProfile;
};
