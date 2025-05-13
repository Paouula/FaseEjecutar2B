/*coleciones:
nombre 
correo 
telefono 
direccion 
activo*/

import { Schema, model} from "mongoose";

const ClientesSchema = new Schema(
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

export default model("Clientes", ClientesSchema)