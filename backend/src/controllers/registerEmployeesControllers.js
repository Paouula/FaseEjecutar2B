import EmployeeModel from "../models/empleados.js";
import bcryptjs from "bcryptjs"; //para encriptar
import jsonwebtoken from "jsonwebtoken"; //para generar token
import { config } from "../config.js";

const registerEmployeesController = {};

registerEmployeesController.register = async (req, res) => {
  const {
    nombre, 
    correo, 
    telefono, 
    direccion, 
    puesto, 
    fecha_contratacion, 
    salario, 
    activo
  } = req.body;

  try {
    //Verificamos si el empleado ya existe
    const existEmployee = await EmployeeModel.findOne({ email });
    if (existEmployee) {
      return res.json({ message: "Empleado ya existe" });
    }

    // Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // Guardemos el empleado nuevo
    const newEmployee = new EmployeeModel({
        nombre, 
        correo, 
        contra:  passwordHash,
        telefono, 
        direccion, 
        puesto, 
        fecha_contratacion, 
        salario, 
        activo
    });

    await newEmployee.save();

    // --> TOKEN <--
    jsonwebtoken.sign(
      //1-Que voy a guardar
      { id: newEmployee._id },
      //2-secreto
      config.JWT.secret,
      //3- cuando expira
      { expiresIn: config.JWT.expiresIn },
      //4- funcion flecha
      (error, token) => {
        if (error) console.log(error);
        res.cookie("authToken", token);
        res.json({message: "Empleado registrado"})
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default registerEmployeesController;
