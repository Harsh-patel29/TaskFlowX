import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: "POST, GET, DELETE, PUT, PATCH",
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

import userRoute from "./Routes/userRoute.js";
import taskRoute from "./Routes/taskRoute.js";

app.use("/api/v1/user", userRoute);
app.use("/api/v1/task", taskRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ message });
});

export { app };
