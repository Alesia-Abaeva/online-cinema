import mongoose, { model, Schema, Types } from "mongoose";

const schema = new Schema(
  {
    text: { type: String, required: true, unique: true },
    idFilms: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // какие еще поля нужны в схеме отзыва?
  },
  {
    timestamps: true,
  }
);

export default model("User", schema);
