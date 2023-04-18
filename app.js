const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let day = "";
  let today = new Date();
  let currentDay = today.getDay();

  const daysArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysArr[currentDay];

  res.render("list", { kindOfDay: dayName });
});

app.listen(3000, () => {
  console.log("server running");
});
