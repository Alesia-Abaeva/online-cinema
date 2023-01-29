import { Router } from "express";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";

export const router: Router = Router();

router.post(
  "/register",
  [
    check("email", "Неккоректный email").isEmail(),
    check("password", "Минимальная длина символов - 6").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      //валидация на стороне сервера
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Неккоректные данные при регистрации!",
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      //прoверяем есть ли такой юзер уже
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует..." });
      }

      const hashedPassword = await bcrypt.hash(password, 12); //хэшируем пароль

      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "Пользователь успешно создан!" });
    } catch (e) {
      res
        .status(500) // добавляем стандартную серверную ошибку
        .json({ message: "Что-то пошло не так, попробуйте еще раз" });
    }
  }
);
