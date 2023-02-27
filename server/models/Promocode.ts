import mongoose, { model, Schema } from 'mongoose';

const schema = new Schema(
  {
    code: { type: String, required: true },
    endDate: { type: Date, required: true },
    activationDate: { type: Date },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export default model('Promocode', schema);
