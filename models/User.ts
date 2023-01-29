import { model, Schema, Types } from "mongoose";

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

export const User = model("User", schema);
