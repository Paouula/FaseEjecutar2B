import express from "express";

//División
import peliculasRoutes from "./src/routes/peliculas.js";
import clientsRoutes from "./src/routes/clients.js";
import employeesRoutes from "./src/routes/employees.js";

import registerEmployees from "./src/routes/registerEmployees.js";
import registerClients from "./src/routes/registerClients.js";
import loginRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";
import passwordRecoveryRoute from "./src/routes/passwordRecovery.js";
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

app.use("/api/registerEmployees", registerEmployees);
app.use("/api/registerClients", registerClients);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/passwordRecovery", passwordRecoveryRoute);

export default app;