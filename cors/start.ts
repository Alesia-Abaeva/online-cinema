import mongoose from "mongoose"; // позволяет подключаться к базе данных
import config from "config";
import { app, PORT } from "../app";
import { setPromocodes } from "../controllers/PromocodeController";
import https from "node:https";
import http from "node:http";
import fs from "node:fs";

export async function start() {
  const httpsOptions = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  };

  try {
    await mongoose.connect(config.get("mongoUri"));

    setInterval(setPromocodes, 1000);

    http.createServer(app).listen(PORT, () => {
      console.log(`Server is running on port PORT:${PORT}`);
    });

    https.createServer(httpsOptions, app).listen(443, () => {
      console.log(`Server is running on port PORT:443`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1); // завершаем процесс, в случае, если что-то пошло не так
  }
}
