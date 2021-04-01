import mongoose from "mongoose";
import env from "../env/index";

const host = env.MONGO_HOST;
const password = env.MONGO_PASSWORD;
const login = env.MONGO_LOGIN;
const dataBaseName = env.MONGO_NAME;

mongoose.connect(
  `mongodb://${login}:${password}@${host}:27017/${dataBaseName}?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error:"));
db.once("open", async () => {
  console.log("database connected");
});
export default db;
