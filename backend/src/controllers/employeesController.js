const employeesController = {};
import employeesModel from "../models/empleados.js";

// SELECT
employeesController.getEmployees = async (req, res) => {
    const employees = await employeessModel.find();
  res.json(employees);
};
  

// INSERT
employeesController.createEmployees = async (req, res) => {
    const { nombre, correo, contra, telefono, direccion, puesto, fecha_contratacion, salario, activo } = req.body;
    const newEmployees = new employeeModel({ nombre, correo, contra, telefono, direccion, puesto, fecha_contratacion, salario, activo });
    await newEmployees.save();
    res.json({ message: "employee save" });
  };
  
  
  // DELETE
  employeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "employees deleted" });
  };
  
  // UPDATE
  employeesController.updateEmployees = async (req, res) => {
    const { nombre, correo, contra, telefono, direccion, puesto, fecha_contratacion, salario, activo } = req.body;
    await employeesModel.findByIdAndUpdate(
      req.params.id,
      { nombre, correo, contra, telefono, direccion, puesto, fecha_contratacion, salario, activo },
      { new: true }
    );
    res.json({ message: "employees updated" });
  };
  
  export default employeesController;
  