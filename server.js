import express from "express";
import sum from "./Sum.js";

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/home", async (req, res) => {
  res.json({ msg: "I am home" });
});

app.get("/getSum/:a/:b", async (req, res) => {
  const { a, b } = req.params;

  res.json({
    ans: sum(Number(a), Number(b))
  });
});
