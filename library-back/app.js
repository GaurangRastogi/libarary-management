const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.WEBSITES_PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for common routes, i.e, displaying all books
const commonRoutes = require("./server/routes/common");
app.use("/common", commonRoutes);

//for user Routes
const userRoutes = require("./server/routes/user");
app.use("/user", userRoutes);

//for admin Routes
const adminRoutes = require("./server/routes/admin");
app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});