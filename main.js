import express from "express";

const app = express();
const port =6969;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
