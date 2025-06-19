import express from "express";
import cors from "cors";
import sendEmail from "./send-email.js";
import "dotenv/config";

const app = express();
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:5173"
        : process.env.CLIENT_URL,
  }),
);
app.use(express.json());

app.post("/send-email", sendEmail);

app.listen(8080, () => {
  console.log("Server running on port", 8080);
});

export default app;
