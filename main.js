import express from "express";
import movieRoutes from "./routes/movies.routes.js"

const app = express();
const port =6969;

app.get("/", (req, res) => {
  res.json({ message: "Hello Worldd" });
});

app.use('/movies',movieRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
