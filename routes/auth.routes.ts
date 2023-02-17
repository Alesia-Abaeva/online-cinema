import { Router } from 'express';
import checkAuth from '../middleware/auth.middelware';
import {
  deleteUser,
  getUserData,
  login,
  register,
  updateUser,
  updateFolders,
  updateUserParentsContr,
  updateUserPassword,
  updateUserTariff,
} from '../controllers/UserControllers';
import {
  checkLoginData,
  checkRegisterData,
} from '../middleware/validation.middelware';
import {
  createUserFolder,
  deleteUserFolder,
  updateUserFolder,
  updateUserFolderName,
} from '../controllers/FoldersController';

export const router = Router();

// api/auth/register
router.post('/register', checkRegisterData(), register);

// api/auth/login
router.post('/login', checkLoginData(), login);

// api/auth/pesron - получаем данные
router.get('/person', checkAuth, getUserData);

// api/auth/pesron - изменяем данные
router.put('/person', checkAuth, updateUser);

// api/auth/pesron/pass
router.put('/person/pass', checkAuth, updateUserPassword);

// api/auth/pesron/parents
router.put('/person/parents', checkAuth, updateUserParentsContr);

// api/auth/pesron/tariff
router.put('/person/tariff', checkAuth, updateUserTariff);

// api/auth/pesron/delete
router.delete('/person/delete', checkAuth, deleteUser);

// api/auth/person/folders
router.put('/person/folders', checkAuth, updateFolders);

// api/auth/person/user-folders/create
router.put('/person/user-folders/create', checkAuth, createUserFolder);

// api/auth/person/user-folders/delete
router.put('/person/user-folders/delete', checkAuth, deleteUserFolder);

// api/auth/person/user-folders/update-name
router.put('/person/user-folders/update-name', checkAuth, updateUserFolderName);

// api/auth/person/user-folders/update
router.put('/person/user-folders/update', checkAuth, updateUserFolder);
