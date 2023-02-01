import { Router } from "express";
import express from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import config from "config";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export const router = Router();

// api/auth/register
router.post(
  "/register",
  [
    check("email", "Неккоректный email").isEmail(),
    check("password", "Минимальная длина символов - 6").isLength({ min: 6 }),
  ],
  async (req: express.Request, res: express.Response) => {
    try {
      console.log(req.body);

      //валидация на стороне сервера
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Неккоректные данные при регистрации.",
        });
      }

      const { email, password, name } = req.body;

      const candidate = await User.findOne({ email });
      //прoверяем есть ли такой юзер уже
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует..." });
      }

      const hashedPassword = await bcrypt.hash(password, 12); //хэшируем пароль

      const user = new User({ email, password: hashedPassword, name });

      await user.save();

      res.status(201).send({ user, message: "Пользователь успешно создан!" });
      // .json({ ...user, message: "Пользователь успешно создан!" });
    } catch (e) {
      console.log(e);
      res
        .status(500) // добавляем стандартную серверную ошибку
        .json({ message: "Не удалось зарегистрироваться." });
    }
  }
);

// api/auth/login
router.post(
  "/login",
  [
    check("email", "Введен неккоректный email").normalizeEmail().isEmail(),
    check("password", "Введите верный пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Попробуйте еще раз. В данных ошибка.",
        });
      }

      //   логика создания пользователя
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Неверный пароль, попробуйте снова." });
      }

      //   создаем токен для авторизованного пользователя
      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h", //время существования токена
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Ошибка авторизации..." });
    }
  }
);
