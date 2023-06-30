const express = require("express");
const app = express();
const morgan = require("morgan");
// const{NotFoundError}= require("./utils/errors")
// const storeRouter = require("./routes/store")
// app.use("/store", storeRouter);

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ ping: "pong" });
});

afterAll(function () {
  db.end();
});

module.exports = app; // exporting app as default
