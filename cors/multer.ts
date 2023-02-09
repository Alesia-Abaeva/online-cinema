import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(
      null,
      file.originalname.replace(/\s/g, "")
      // file.fieldname +
      //   "-" +
      //   Date.now() +
      //   path.extname(file.originalname).toLowerCase().trim()
      // file.originalname
    );
  },
});

export const upload = multer({ storage, limits: { fileSize: 50000000 } });
