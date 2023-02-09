import { Router } from "express";
import checkAuth from "../middleware/auth.middelware";
import {
  getUserData,
  login,
  register,
  updateUser,
  updateUserParentsContr,
  updateUserPassword,
} from "../controllers/UserControllers";
import {
  checkLoginData,
  checkRegisterData,
} from "../middleware/validation.middelware";

export const router = Router();

// api/auth/register
router.post("/register", checkRegisterData(), register);

// api/auth/login
router.post("/login", checkLoginData(), login);

// api/auth/pesron - получаем данные
router.get("/person", checkAuth, getUserData);

// api/auth/pesron - изменяем данные
router.put("/person", checkAuth, updateUser);

// api/auth/pesron/pass
router.put("/person/pass", checkAuth, updateUserPassword);

// api/auth/pesron/parents
router.put("/person/parents", checkAuth, updateUserParentsContr);
