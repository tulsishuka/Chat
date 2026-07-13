import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import messageRoutes from "./routes/messageRoutes";

const app = express();

// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true,
// }));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://chat-2-x4kd.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);

export default app;