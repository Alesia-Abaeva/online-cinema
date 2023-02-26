import { validationResult } from 'express-validator';
import express from 'express';
import User from '../models/User';
import Reviews from '../models/Reviews';
import { paginateData } from '../utils/pagination';

export const createReview = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    //валидация на стороне сервера
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Неккоректные данные.',
      });
    }

    const { filmId, filmName, text, stars } = req.body as {
      filmId: string;
      filmName: string;
      text: string;
      stars: string;
    };

    const user = await User.findById(req.user.userId);

    const review = new Reviews({
      filmId,
      filmName,
      text,
      stars,
      user: user._id,
    });

    await review.save();

    res.status(201).send({
      message: 'Отзыв успешно создан!',
    });
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: 'Не удалось создать отзыв.' });
  }
};

export const updateReview = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    //валидация на стороне сервера
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Неккоректные данные.',
      });
    }

    const { id, text, stars } = req.body as {
      id: string;
      text: string;
      stars: string;
    };

    const review = await Reviews.findByIdAndUpdate(
      id,
      { text, stars },
      { new: true }
    );

    res.status(200).send({ message: 'Отзыв успешно обновлен' });
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: 'Не удалось обновить отзыв.' });
  }
};

export const deleteReview = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    await Reviews.deleteOne({ _id: req.params.id });

    res.status(200).send({ message: 'Отзыв успешно удален' });
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: `Не удалось удалить отзыв: ${e}` });
  }
};

export const getReviewsByUser = async (
  req: express.Request,
  res: express.Response
) => {
  if (!req?.query?.page || !req?.query?.limit) {
    return res.status(400).json({ message: 'Pagination data required' });
  }
  try {
    const initialData = await Reviews.find({ user: req.user.userId });

    const reviews = paginateData(req, initialData);

    res.status(200).send({ reviews });
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: `Не удалось найти отзывы: ${e}` });
  }
};

export const getReviewsByFilm = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const filmReviews = await Reviews.find({ filmId: req.params.filmId });

    const reviews = await Promise.all(
      filmReviews.map(async (review) => {
        const user = await User.findById(review.user);
        return {
          ...review['_doc'],
          user: {
            _id: user._id,
            name: user.name,
            lastName: user.lastName,
            avatarUrl: user.avatarUrl,
          },
        };
      })
    );

    res.status(200).send({ reviews });
  } catch (e) {
    res
      .status(500) // добавляем стандартную серверную ошибку
      .json({ message: `Не удалось найти отзывы: ${e}` });
  }
};
