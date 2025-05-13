const peliculasController = {};
import peliculasModel from "../models/peliculas.js";

// SELECT
peliculasController.getPeliculas = async (req, res) => {
    const peliculas = await peliculasModel.find();
  res.json(peliculas);
};
  
  // INSERT
  peliculasController.insertPeliculas = async (req, res) => {
    const { titulo, descripcion, director, genero, anio, duracion, imagen } = req.body;
    const newPeliculas = new peliculasModel({ titulo, descripcion, director, genero, anio, duracion, imagen });
    await newPeliculas.save();
    res.json({ message: "pelicula saved" });
  };
  
  // DELETE
  peliculasController.deletePeliculas = async (req, res) => {
    await peliculasModel.findByIdAndDelete(req.params.id);
    res.json({ message: "peliculas deleted" });
  };
  
  // UPDATE
  peliculasController.updatePeliculas = async (req, res) => {
    const { titulo, descripcion, director, genero, anio, duracion, imagen } = req.body;
    await peliculasModel.findByIdAndUpdate(
      req.params.id,
      { titulo, descripcion, director, genero, anio, duracion, imagen },
      { new: true }
    );
    res.json({ message: "peliculas updated" });
  };
  
  export default peliculasController;
  