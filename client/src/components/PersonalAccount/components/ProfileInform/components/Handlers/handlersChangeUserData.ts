import { updateUser, updateUserPass } from 'src/api/back/auth';
import { appDispatch } from 'src/logic/redux';
import { setUserInfo } from 'src/logic/redux/actions';

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
    // const newBody = Object.fromEntries(Object.entries(body).filter((el) => el[1] !== ''));
    // удаляем пустые строчки

    // загрузжаем файл - получаем ответ с обновленными данными о юзере
    const { data } = await updateUserPass(body);
    appDispatch(setUserInfo({ data }));
  } catch (err) {
    console.warn(err);
  }
};
