const express = require("express");

const app = express();

// Body-parser
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
