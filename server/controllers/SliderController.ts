import express from 'express';
import * as fs from 'fs';
import { paginateData } from '../utils/pagination';

const filePath = './collections/sliders.json';

export const getSliderData = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const slider = req.params.slider;

    const data = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));

    let modelData = data[slider];
    const resData = paginateData(req, modelData);

    res.status(200).json(resData);
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: 'Не удалось получить данные.' });
  }
};
