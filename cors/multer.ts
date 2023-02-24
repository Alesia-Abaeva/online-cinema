import multer from "multer";

export const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname.replace(/\s/g, ""));
  },
});

export const upload = multer({ storage, limits: { fileSize: 50000000 } });
