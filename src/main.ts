import express from "express";
import env from "./env/index";
import "./utils/mongoose";
import stationController from "./api/stations/stations.controller";
import carController from "./api/cars/cars.controller";
const app = express();
app.use(express.json({ limit: "50mb" }));

app.use(stationController);
app.use(carController);
app.listen(env.APP_PORT);
console.log("Serveur listening on:", env.APP_PORT);
