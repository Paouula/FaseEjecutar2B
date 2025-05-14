import { v2 as cloudinary } from "cloudinary";
import peliculasModel from "../models/peliculas.js";

//Configuración del cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});

// Array de funciones vacio
const peliculasController = {};

// SELECT
peliculasController.getPeliculas = async (req, res) => {
    const peliculas = await peliculasModel.find();
  res.json(peliculas);
};
  
  // INSERT
  peliculasController.insertPeliculas = async (req, res) => {

    try{   
    const { titulo, descripcion, director, genero, anio, duracion } = req.body;
    let imageUrl = "";

    if (req.file) {
      //Subir el archivo a Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg"],
      });
      imageUrl = result.secure_url;
    }

    const newPeliculas = new peliculasModel({ titulo, descripcion, director, genero, anio, duracion, imagen: imageUrl });
    newPeliculas.save();

    res.json({ message: "pelicula saved" });
    }catch (error) {
      console.log("error" + error);
    }
  };
  
  // DELETE
  peliculasController.deletePeliculas = async (req, res) => {
    await peliculasModel.findByIdAndDelete(req.params.id);
    res.json({ message: "peliculas deleted" });
  };
  
  // UPDATE
  peliculasController.updatePeliculas = async (req, res) => {
    const { titulo, descripcion, director, genero, anio, duracion, imagen: imageUrl } = req.body;
    await peliculasModel.findByIdAndUpdate(
      req.params.id,
      { titulo, descripcion, director, genero, anio, duracion, imagen: imageUrl},
      { new: true }
    );
    res.json({ message: "peliculas updated" });
  };
  
  export default peliculasController;
  