import express from "express";
import connectDatabase from "./src/database/database.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import dashboardRoute from "./src/routes/dashboard.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/dashboard", dashboardRoute);

app.listen(3000, () =>
  console.log(`Express running at http://localhost:${PORT}`),
);
