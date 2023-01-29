import { Router } from "express";

export const router: Router = Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: "Что-то пошло не так, попробуйте еще раз" });
  }
});
