import mongoose from "mongoose";
import "dotenv/config";
export const connect = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
};
