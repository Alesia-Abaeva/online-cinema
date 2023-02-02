export const multerController = (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
};
