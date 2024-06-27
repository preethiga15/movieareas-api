import express from "express";
import {
  movieIndex,
  movieCreate,
  movieUpdate,
  movieDelete
} from "../controllers/movies.controller.js";

const router = express.Router();

// CRUD functionality of movies
router.get("/", movieIndex);
router.post("/", movieCreate);
router.put("/:id", movieUpdate);
router.delete("/:id", movieDelete);

export default router;
