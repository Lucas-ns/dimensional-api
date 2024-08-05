import express from "express";
import userRoute from "./src/routes/user.route.js";
import connectDatabase from "./src/database/database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000, () =>
  console.log(`Express running at http://localhost:${PORT}`),
);
