import { model, Schema } from "mongoose";

let schema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    PasswordConfirmation: String,
  },
  {
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

export const User = model("User", schema);
