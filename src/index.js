const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/routes");

const url =
  // "mongodb+srv://Alex:zxcvbnm123Qasd!@cluster0-mvpsh.mongodb.net/sculptor?retryWrites=true";
  // mongodb+srv://Alex:zxcvbnm123Qasd!@cluster0-mvpsh.mongodb.net/test?retryWrites=true&w=majority
  "mongodb+srv://AlexShouAtlasDB:Utk4fUTAEG2bhQB!@cluster0-9qynf.mongodb.net/fillmslist?retryWrites=true";

mongoose
  .connect(url, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("DB OK"), err => console.log(err));

app.use(logger("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", express.static("public"));
// app.use("/api", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server working on port ${PORT}`);
});
