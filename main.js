import express from "express";

const app = express();
const port =6969;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

//CRUD functionality of movies

//R-For Reading
app.get('/movies', () => {});

//c-For creating movies
app.post("/movies",() => {});




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
