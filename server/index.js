import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import connectDB from "./mongodb/connect.js";

import dalleRoutes from "./routes/dalleRoutes.js";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", async (req, res) => {
  res.send("hello from dalle");
});

const startServer = async (req, res) => {
  try {
    connectDB(process.env.MONGODB_URL);
  } catch (error) {}
  app.listen(8082, () => console.log("server started on 8082"));
};

startServer();
