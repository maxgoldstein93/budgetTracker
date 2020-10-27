const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3636;

const app = express();

app.use(logger("dev"));

app.use(compression());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use(express.static("public"));
// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});