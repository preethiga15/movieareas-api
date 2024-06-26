import express from "express";
import { movieIndex,
    movieCreate,
    movieUpdate,
    moviedelete,
} from "../controller/movies.controller";

const router = express.Router();

//CRUD functionality of movies

//R-For Reading
router.get("/", movieIndex);

//c-For creating movies
router.post("/",movieCreate);

router.put("/:id",movieUpdate);

router.delete("/:id",moviedelete);

 export default router;