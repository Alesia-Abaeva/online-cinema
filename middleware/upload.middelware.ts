import User from "../models/User";

export default async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      {
        avatarUrl: req.url,
      },
      {
        new: true,
      }
    );

    res.json(user);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Ошибка при обновлении данных, попробуйте еще раз." });
  }
};
