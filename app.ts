import express from "express";
import config from "config";
import mongoose from "mongoose"; // позволяет подключаться к базе данных
import { router } from "./routes/auth.routes";
import cors from "cors";
import checkAuth from "./middleware/auth.middelware";
import { upload } from "./cors/multer";
import { multerController } from "./controllers/MulterController";
import { start } from "./cors/start";

mongoose.set("strictQuery", true);

mongoose
  .connect(config.get("mongoUri"))
  .then(() => {
    console.log("mongoDB OKEY");
  })
  .catch((err) => {
    console.log("mongoDB error");
  });

export const app = express();

export const PORT: string | number = config.get("port") || 3003;

// const storage = multer.diskStorage({
//   destination: (_, __, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (_, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", router); //регистрация роутов, для запросов от фронта
// загрузка изображений на бэк
app.post(
  "/upload",
  checkAuth,
  upload.single("image"),
  multerController

  // (req, res) => {
  //   res.json({
  //     url: `/uploads/${req.file.originalname}`,
  //   });
  // }
);

// async function start() {
//   try {
//     await mongoose.connect(config.get("mongoUri"));

//     app.listen(PORT, () =>
//       console.log(`Server is running on port PORT:${PORT}`)
//     );
//   } catch (e) {
//     console.log("Server Error", e.message);
//     process.exit(1); // завершаем процесс, в случае, если что-то пошло не так
//   }
// }

start();

/**
 * 
    "server": "cross-env NODE_ENV=production node app.ts", - старт сервера в обычном режиме
    "server:watch": "cross-env NODE_ENV=development nodemon app.ts", - старт сервера с отслеживанием изменений
    "client:start": "npm run start --prefix client", - старт фронтенд приложения с отслеживанием изменений
    "client:install": "npm install --prefix client", - установка зависимостей фронтенд приложения
    "client:build": "npm run build --prefix client", - запуск продакшн сборки фронтенда
    "dev": "cross-env NODE_ENV=developmen concurrently \"npm run server:watch\" \"npm run client:start\"" - запуск с отслеживанием измененйи и бек и фронт
  },
 * 
 */
