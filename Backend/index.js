import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cron from "node-cron";
// import { spawn } from "child_process";

import trainRouter from "./routes/train.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware to parse JSON body data
app.use(express.json());

// Using CORS
app.use(
  cors({
    origin: [process.env.API_URL, "http://localhost:3000"],
  })
);

// Connect to the MongoDB database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("[DB] Connection Success");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Route for handling train data and bookings
app.use("/api/train", trainRouter);

// Route for Authentication
app.use("/api/auth", authRouter);

// Handle 404 or other routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
