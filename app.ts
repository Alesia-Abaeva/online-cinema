const express = require("express");
const app = express();
const config = require("config");

const PORT: string | number = config.get("port") || 3003;

app.listen(PORT, () => console.log(`Server is running on port PORT:${PORT}`));

// const jsonServer = require("json-server");
// const dotenv = require("dotenv");
// // считать переменные из .env
// dotenv.config();
// const server = jsonServer.create();
// const router = jsonServer.router(db);
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// server.use(router);
// server.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });

const db = {
  garage: [
    {
      name: "Tesla",
      color: "#e6e6fa",
      id: 1,
    },
    {
      name: "BMW",
      color: "#fede00",
      id: 2,
    },
    {
      name: "Mersedes",
      color: "#6c779f",
      id: 3,
    },
    {
      name: "Ford",
      color: "#ef3c40",
      id: 4,
    },
  ],
  winners: [
    {
      id: 1,
      wins: 1,
      time: 10,
    },
  ],
};

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
