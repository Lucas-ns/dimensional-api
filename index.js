const express = require("express");
const userRoute = require("./src/routes/user.route");
const connectDatabase = require("./src/database/database");

const app = express();
const PORT = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000, () =>
  console.log(`Express running at http://localhost:${PORT}`),
);
