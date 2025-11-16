const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

mongoose.connect(process.env.MONGO_URL)
  .then(() => app.listen(process.env.PORT || 5000, () => {
    console.log("Backend running");
  }))
  .catch(err => console.log(err));
