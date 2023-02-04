import jwt from "jsonwebtoken";
import config from "config";

export default (req, res, next) => {
  try {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

    console.log("token=====>", token);
    console.log("token REQ====>", req.headers.authorization);

    if (!token) {
      return res
        .status(401)
        .json({ message: "Не авторизован ты дружочек яхонтовый" });
    }
    console.log("fs");

    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded;

    next();
  } catch (e) {
    return res
      .status(401)
      .json({ message: "Не авторизован, проблема я хз в чем" });
  }
};
