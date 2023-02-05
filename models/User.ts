import { model, Schema, Types } from "mongoose";
// const { model, Schema, Types } = require("mongoose");

const schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String },
    lastName: { type: String },
    password: { type: String, required: true },
    films: [{ type: Types.ObjectId, ref: "Films" }], // TODO: здесь будет отображаться списков избранных фильмов, возможно сделать объект?
    avatarUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model("User", schema);
