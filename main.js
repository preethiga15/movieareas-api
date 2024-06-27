import express from "express";
import movieRoutes from "./routes/movies.routes.js";
import connectDB from "./lib/db.js";

const app = express();
const port = 6969;

// Connect DB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use('/movies', movieRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
