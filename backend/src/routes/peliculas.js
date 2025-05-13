import express from "express";

const router = express.Router();

import peliculasController from "../controllers/peliculasController.js";

router
    .route("/")
    .get(peliculasController.getPeliculas)
    .post(peliculasController.insertPeliculas);

router
    .router("/:id")
    .put(peliculasController.updatePeliculas)
    .delete(peliculasController.deletePeliculas)

export default router;