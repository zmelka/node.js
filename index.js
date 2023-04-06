const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dog", (req, res) => {
  res.json({ sound: "고양이" });
});

app.get("/cat", (req, res) => {
  res.json({ sound: "강아지" });
});

app.get("/user/:id", (req, res) => {
  // const q = req.params;
  // console.log(q.id);
  const q = req.query;
  console.log(q);
  console.log(q.q);
  console.log(q.name);
  res.json({ userid: q.name });
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;

  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
