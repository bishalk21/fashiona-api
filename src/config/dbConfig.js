import "dotenv/config";
import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose.set("strictQuery", false);

export const dbConnection = () => {
  try {
    const conStr = process.env.MONGO_CLIENT;
    if (!conStr) {
      return console.log("There is no connection string available");
    }
    const con = mongoose.connect(conStr);
    con && console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
  }
};
