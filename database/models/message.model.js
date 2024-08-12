import { model, Schema } from "mongoose";

let schema = new Schema(
  {
    message: String,
    user: String,
  },
  {
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

export const Message = model("Message", schema);
