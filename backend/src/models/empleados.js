/* Colección:
nombre 
correo 
telefono 
direccion 
puesto 
fecha_contratacion 
salario 
activo  */

import { Schema, model} from "mongoose";

const EmpleadosSchema = new Schema(
    {
        nombre:{
            type: String,
            requiere: true
        },
        correo:{
            type: String,
            requiere: true
        },
        telefono:{
            type: String,
            requiere: true
        },
        direccion:{
            type: String,
            requiere: true
        },
        puesto:{
            type: String,
            requiere: true
        },
        fecha_contratacion:{
            type: Date,
            requiere: true
        },
        salario:{
            type: Number,
            requiere: true
        },
        activo:{
            type: Boolean,
            requiere: true
        }
    },
    {
        timestamps: true,
        strict: false,
    }
);

export default model("Empleados", EmpleadosSchema)