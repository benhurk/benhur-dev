import express from "express";
import cors from "cors";
import sendEmail from "./send-email.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
app.use(express.json());

app.post("/send-email", sendEmail);

app.listen(8080, () => {
  console.log("Server running on port", 8080);
});

export default app;
