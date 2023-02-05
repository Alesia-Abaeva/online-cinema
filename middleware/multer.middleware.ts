export const multerController = (req, res, next) => {
  req.url = `/uploads/${req.file.originalname}`;
  next();
};
