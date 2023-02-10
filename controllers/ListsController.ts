import express from 'express';
import * as fs from 'fs';
import { LISTS_SORT } from '../filters/lists-sort';
import { FindedMoviesBack } from '../types/films/res-film';
import { SortTypes } from '../types/sort/sort-types';
import { paginateData } from '../utils/pagination';

const filePath = './collections/lists.json';

export const getListData = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const list = req.params.list;
    const sortType = req.query.sort as SortTypes;

    const data = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));

    let listData = data[list] as FindedMoviesBack[];
    if (sortType && sortType !== 'DEFAULT') {
      const sortFn = LISTS_SORT.find((el) => el.sort === sortType).fn;
      listData = listData.sort(sortFn);
    }

    const resData = paginateData(req, listData);

    res.status(200).json(resData);
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: 'Не удалось получить данные.' });
  }
};
