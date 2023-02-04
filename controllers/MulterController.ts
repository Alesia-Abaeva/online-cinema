export const multerController = (req, res) => {
  console.log(req);
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
};
