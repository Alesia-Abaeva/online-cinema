import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    // cb(null, file.originalname.replace(/\s/g, ""));
    cb(
      null,
      file.fieldname.replace(/\s/g, "") +
        "_" +
        Date.now() +
        path.extname(file.originalname).toLowerCase()
    );
  },
});

export const upload = multer({ storage, limits: { fileSize: 50000000 } });
