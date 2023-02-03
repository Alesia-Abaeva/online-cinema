import mongoose from "mongoose"; // позволяет подключаться к базе данных
import config from "config";

import { app, PORT } from "../app";

export async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));

    app.listen(PORT, () =>
      console.log(`Server is running on port PORT:${PORT}`)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1); // завершаем процесс, в случае, если что-то пошло не так
  }
}
