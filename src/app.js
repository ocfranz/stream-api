import express from "express";
import path from "path";
import morgan from "morgan";
import db from "./db";
import authRoutes from "./routes/api/authRoutes";
const app = express();

app.use(morgan("dev"));

app.use("/api/v1", authRoutes);

export default app;
