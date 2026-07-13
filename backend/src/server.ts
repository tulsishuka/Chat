import dotenv from "dotenv";
dotenv.config();

import http from "http";
import { Server } from "socket.io";

import app from "./app";
import { connectDB } from "./config/db";
import { socketHandler } from "./socket";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://chat-2-x4kd.onrender.com/",
    credentials: true,
  },
});

socketHandler(io);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});