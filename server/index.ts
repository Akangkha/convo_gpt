import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import express, { Application } from "express";
import useChats from "./routes/userChat";
import useBot from "./routes/botModel";

dotenv.config();

const app: Application = express();

const corsConfig = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "DELETE", "PUT"],
};
app.use(cors(corsConfig));
const mongo_db = process.env.MONGO_URI || "mongodb://localhost:27017/convo_gpt";
if (!mongo_db) {
  throw new Error("MONGO_URI must be set in the environment variables");
}
const port = process.env.PORT || 5000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/", express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to Convo_GPT!");
});
app.use("/bot", useBot);

app.use("/chat", useChats);

mongoose
  .connect(mongo_db!)
  .then(() => console.log("Connected to MongoDB"))
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  )
  .catch((err) => console.log(err));
