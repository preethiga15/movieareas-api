import express from "express";


const router = express.Router();

//CRUD functionality of movies

//R-For Reading
router.get('/', (req,res) => {
    res.send("get all movies listtt");
});

//c-For creating movies
router.post("/",() => {});

router.put("/:id", () => {});

router.delete("/:id", () => {});

 export default router;