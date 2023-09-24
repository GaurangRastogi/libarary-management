const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.WEBSITES_PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for user Routes
const userRoutes = require("./server/routes/user");
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});