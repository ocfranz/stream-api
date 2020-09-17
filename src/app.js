import express from "express";
import path from "path";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));

export default app;
