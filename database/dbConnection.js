import mongoose from "mongoose";

export const dbConnection = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected Successfully.");
  })
  .catch(() => {
    console.log("error");
  });
