import mongoose, { model, Schema } from "mongoose";

const schema = new Schema(
  {
    text: { type: String, required: true },
    stars: { type: Number, required: true },
    filmId: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Reviews", schema);
