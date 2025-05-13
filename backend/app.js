import express from "express";

//División
import peliculasRoutes from "./src/routes/peliculas.js";
import clientsRoutes from "./src/routes/clients.js";
import employeesRoutes from "./src/routes/employees.js";

import cookieParser from "cookie-parser";

// Creo una constante que es igual a la libreria que importé
const app = express();
//Que acepte datos en json
app.use(express.json());
//Que acepte cookies en postman
app.use(cookieParser());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/peliculas", peliculasRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/employees", employeesRoutes);



//Exportar
export default app;