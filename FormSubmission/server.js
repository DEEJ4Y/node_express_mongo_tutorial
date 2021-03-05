const express = require("express");

const app = express();

// Body-parser
app.use(express.urlencoded({ extended: true }));

// Serve public files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Hello ${req.body.email}`);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
