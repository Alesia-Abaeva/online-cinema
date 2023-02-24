import express from "express";
import config from "config";
import mongoose from "mongoose"; // позволяет подключаться к базе данных
import { router as authRouter } from "./routes/auth.routes";
import { router as listsRouter } from "./routes/lists.routes";
import { router as slidersRouter } from "./routes/slider.routes";
import { router as collectionsRouter } from "./routes/collections.routes";
import { router as reviewsRouter } from "./routes/reviews.routes";
import { router as promocodeRouter } from "./routes/promocode.router";

import cors from "cors";
import checkAuth from "./middleware/auth.middelware";
import { upload } from "./cors/multer";
import { start } from "./cors/start";
import uploadFiles from "./controllers/UploadController";
// import { multerController } from "./middleware/multer.middleware";

mongoose.set("strictQuery", true);

mongoose
  .connect(config.get("mongoUri"))
  .then(() => {
    console.log("mongoDb is running");
  })
  .catch((err) => {
    console.log("mongoDb error");
  });

export const app = express();

export const PORT: string | number = config.get("port") || 3003;
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", parameterLimit: 100000, extended: true })
);
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRouter); // регистрация роутов, для запросов от фронта
app.use("/api/lists", listsRouter); // пути для получения данных о списках
app.use("/api/collections", collectionsRouter); // пути для получения данных о подборках
app.use("/api/sliders", slidersRouter); // пути для получения данных для слайдеров на главной
app.use("/api/reviews", reviewsRouter); // пути для получения данных об отзывах
app.use("/api/promocode", promocodeRouter); // пути для работы с промокодами

// TODO: вынести в роуты
app.post("/upload", checkAuth, upload.single("image"), uploadFiles); // загрузка изображений на бэк

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
