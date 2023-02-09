import express from 'express';
import * as fs from 'fs';

const filePath = './collections/lists.json';

export const getListData = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const list = req.params.list;
    const page = +req.query.page;
    const limit = +req.query.limit;
    
    const data = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));

    const listData = data[list];

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const pages = listData.length / limit;

    const resultData = listData.slice(startIndex, endIndex);

    res.status(200).json({
      docs: resultData,
      total: listData.length,
      limit: limit,
      page: page,
      pages: pages,
    });
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: 'Не удалось получить данные.' });
  }
};
