import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

//manual imports
import connectDB from "./config/mongodb.js";
import { authRouter } from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";

// creating an express app

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = ["http://localhost:5173"];

// a middleware (all request will be parser using json)
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// send a request and response to the port

// API end points
app.get("/", (req, res) => {
  res.send("API working");
});
app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

// listening to the server
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
