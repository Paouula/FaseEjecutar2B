/*Colección:

titulo 
descripcion 
director 
genero 
anio 
duracion 
imagen */

import { Schema, model} from "mongoose";

const PeliculasSchema = new Schema(
    {
        titulo: {
            type: String,
            requiere: true
        },
        descripcion: {
            type: String,
            requiere: true
        },
        director:{
            type: String,
            requiere: true
        },
        genero:{
            type: String,
            requiere: true
        },
        anio:{
            type: Number,
            requiere: true
        },
        duracion:{
            type: Number,
            requiere: true
        },
        imagen:{
            type: String,
            requiere: true
        }
    },
    {
        timestamps: true,
        strict: false,
    }
);
export default model("Peliculas", PeliculasSchema)