const clientsController = {};
import clientsModel from "../models/clientes.js";

// SELECT
clientsController.getClients = async (req, res) => {
  const clients = await clientsModel.find();
  res.json(clients);
};

// INSERT
clientsController.createClients = async (req, res) => {
  const {nombre, correo, contra, telefono, direccion, activo } = req.body;
  const newClients = new customersModel({ nombre, correo, contra, telefono, direccion, activo});
  await newClients.save();
  res.json({ message: "Clients save" });
};

// DELETE
clientsController.deleteClients = async (req, res) => {
const deleteClients = await clientsModel.findByIdAndDelete(req.params.id);
  if (!deleteClients) {
    return res.status(404).json({ message: "clients dont find" });
  }
  res.json({ message: "clients deleted" });
};

// UPDATE
clientsController.updateClients = async (req, res) => {
  // Solicito todos los valores
  const {  nombre, correo, contra, telefono, direccion, activo  } = req.body;
  // Actualizo
  await clientsModel.findByIdAndUpdate(
    req.params.id,
    {
        nombre, 
        correo, 
        contra,
        telefono, 
        direccion, 
        activo
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "clients update" });
};

export default clientsController;