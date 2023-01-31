import { model, Schema, Types } from "mongoose";
// const { model, Schema, Types } = require("mongoose");

const schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String },
    password: { type: String, required: true },
    links: [{ type: Types.ObjectId, ref: "Link" }],
  },
  {
    timestamps: true,
  }
);

export default model("User", schema);
