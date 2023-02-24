import express from "express";
import User from "../models/User";
import Promocode from "../models/Promocode";
import { readFileSync } from "node:fs";

export const setPromocodes = async () => {
  const promocodesFile = JSON.parse(
    readFileSync("./collections/promocodes.json").toString()
  );

  const promocodesDb = await Promocode.find({});

  const promocodesDiff = promocodesFile.promocodes.filter(
    (promocodeFile) =>
      !promocodesDb.some(
        (promocodeDb) => promocodeDb.code === promocodeFile.code
      )
  );

  if (!promocodesDiff.length) {
    return null;
  }

  await Promise.all(
    promocodesDiff.map(async ({ code, endDate }) => {
      const promocode = new Promocode({
        code,
        endDate: new Date(endDate.year, endDate.month - 1, endDate.day),
      });

      await promocode.save();
    })
  );
};

export const activatePromocode = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { code } = req.body as {
      code: string;
    };

    const promocode = await Promocode.findOne({ code });

    if (promocode.user && promocode.user.toString() !== req.user.userId) {
      return res.status(500).json({ message: "Промокод не найден." });
    }

    if (promocode.activationDate) {
      return res.status(500).json({ message: "Промокод уже активирован." });
    }

    const currentDate = new Date();

    if (promocode.endDate < currentDate) {
      return res
        .status(500)
        .json({ message: "Истек срок действия промокода." });
    }

    promocode.activationDate = currentDate;
    !promocode.user && (promocode.user = req.user.userId);

    await promocode.save();

    return res.status(201).send({
      message: "Промокод успешно применен!",
    });
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: "Не удалось активировать промокод." });
  }
};

export const getPersonPromocode = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const currentPersonalPromocode = await Promocode.findOne({
      user: req.user.userId,
    });

    if (currentPersonalPromocode) {
      return res.status(200).send({
        code: currentPersonalPromocode.code,
      });
    }

    const newPersonalPromocode = await Promocode.findOne({
      activationDate: { $exists: false },
      user: { $exists: false },
    });

    newPersonalPromocode.user = req.user.userId;

    await newPersonalPromocode.save();

    return res.status(201).send({
      code: newPersonalPromocode.code,
    });
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: "Не удалось найти промокод" });
  }
};
