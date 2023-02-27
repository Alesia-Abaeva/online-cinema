import jwt from 'jsonwebtoken';
import config from 'config';

export default (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (!token) {
      return res
        .status(401)
        .json({ message: 'Не авторизован ты дружочек яхонтовый' });
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded;

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Не авторизован' });
  }
};
