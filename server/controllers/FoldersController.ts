import express from 'express';
import User from '../models/User';

export const createUserFolder = async (
  req: express.Request,
  res: express.Response
) => {
  if (!req?.body?.displayedName || !req?.body?.id) {
    return res
      .status(400)
      .json({ message: 'Folder name and movie id is required' });
  }

  try {
    const folderName = req.body.displayedName;
    const folderId = req.body.id;

    const user = await User.findById(req.user.userId);
    const arr = user.userFolders;

    const isFolder = arr.find((el) => el._id === folderId);
    if (isFolder) {
      res.status(400).json({ message: 'Такая папка уже есть' });
    }
    const newFolder = { films: [], displayedName: folderName, _id: folderId };
    arr.push(newFolder);

    const result = await User.findOneAndUpdate(
      {
        _id: req.user.userId,
      },
      {
        userFolders: arr,
      },
      {
        new: true,
      }
    );
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: `Ошибка при запросе к базу данных: ${e}` });
  }
};

export const deleteUserFolder = async (
  req: express.Request,
  res: express.Response
) => {
  if (!req?.body?.id) {
    return res
      .status(400)
      .json({ message: 'Cant delete folder, no id provided' });
  }

  try {
    const folderId = req.body.id;

    const user = await User.findById(req.user.userId);
    const arr = user.userFolders;
    const newArr = arr.filter((el) => el._id !== folderId);

    const result = await User.findOneAndUpdate(
      {
        _id: req.user.userId,
      },
      {
        userFolders: newArr,
      },
      {
        new: true,
      }
    );
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: `Ошибка при запросе к базу данных: ${e}` });
  }
};

export const updateUserFolderName = async (
  req: express.Request,
  res: express.Response
) => {
  if (!req?.body?.id || !req?.body?.displayedName) {
    return res
      .status(400)
      .json({ message: 'Cant update folderName, no id provided' });
  }

  try {
    const folderId = req.body.id;
    const newFolderName = req.body.displayedName;

    const user = await User.findById(req.user.userId);
    const arr = user.userFolders;

    const folder = arr.find((el) => el._id === folderId);
    if (!folder) {
      res.status(400).json({ message: 'Такой папки не существует' });
    }

    folder.displayedName = newFolderName;

    const result = await User.findOneAndUpdate(
      {
        _id: req.user.userId,
      },
      {
        userFolders: arr,
      },
      {
        new: true,
      }
    );
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: `Ошибка при запросе к базу данных: ${e}` });
  }
};

export const updateUserFolder = async (
  req: express.Request,
  res: express.Response
) => {
  if (!req?.body?.id || !req?.body?.filmId) {
    return res
      .status(400)
      .json({ message: 'Cant update folder, no id or film provided' });
  }

  try {
    const folderId = req.body.id;
    const filmId = req.body.filmId;

    const user = await User.findById(req.user.userId);
    const foldersArr = user.userFolders;

    const folder = foldersArr.find((el) => el._id === folderId);
    if (!folder) {
      res.status(400).json({ message: 'Такой папки не существует' });
    }
    const arr = folder.films;

    const idx = arr.indexOf(filmId);
    idx !== -1 ? arr.splice(idx, 1) : arr.push(filmId);

    folder.films = arr;

    const result = await User.findOneAndUpdate(
      {
        _id: req.user.userId,
      },
      {
        userFolders: foldersArr,
      },
      {
        new: true,
      }
    );
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: `Ошибка при запросе к базу данных: ${e}` });
  }
};
