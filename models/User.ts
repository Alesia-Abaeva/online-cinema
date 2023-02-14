import { model, Schema, Types } from 'mongoose';
// const { model, Schema, Types } = require("mongoose");

const schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String },
    lastName: { type: String },
    password: { type: String, required: true },
    folders: {
      bookmarks: [Number],
      watched: [Number],
      watchedRecently: [Number],
    },
    userFolders: [
      {
        _id: { type: Number },
        displayedName: { type: String },
        films: [Number],
      },
    ],
    avatarUrl: { type: String },
    tariff: { type: String },
    promocode: [{ type: String }],
    parentControls: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model('User', schema);
