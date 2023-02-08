import { updateUser, updateUserParentsCntr, updateUserPass } from 'src/api/back/auth';
import { appDispatch } from 'src/logic/redux';
import { setPasswordError, setUserInfo } from 'src/logic/redux/actions';

export const handleChangeUserData = async (body: AuthGetPersonToken) => {
  try {
    const newBody = Object.fromEntries(Object.entries(body).filter((el) => el[1] !== ''));
    // удаляем пустые строчки
    const { data } = await updateUser(newBody);
    appDispatch(setUserInfo({ data }));
  } catch (err) {
    console.warn(err);
  }
};

export const handleChangeUserPassword = async (body: AuthGetPersonToken) => {
  try {
    await updateUserPass(body);
    appDispatch(setPasswordError(null));
  } catch (err) {
    console.warn(err);
    appDispatch(setPasswordError(err as ErrorMessage));
  }
};

export const handleChangeParentControl = async (body: AuthGetPersonToken) => {
  try {
    const { data } = await updateUserParentsCntr(body);
    appDispatch(setUserInfo({ data }));
  } catch (err) {
    console.warn(err);
  }
};
