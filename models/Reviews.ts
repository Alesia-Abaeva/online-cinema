import mongoose, { model, Schema } from "mongoose";

const schema = new Schema(
  {
    text: { type: String, required: true },
    stars: { type: Number, required: true },
    filmId: { type: String },
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

export default model("Reviews", schema);
