import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import messageRoutes from "./routes/messageRoutes";


const app = express();


// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);


app.use(express.json());


// Routes

app.use(
  "/api/auth",
  authRoutes
);


app.use(
  "/api/messages",
  messageRoutes
);


// Test API

app.get("/", (req, res) => {

  res.json({
    message: "Realtime Chat API Running"
  });

});


export default app;