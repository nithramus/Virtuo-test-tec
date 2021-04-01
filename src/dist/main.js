"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./env/index"));
require("./utils/mongoose");
const stations_controller_1 = __importDefault(require("./api/stations/stations.controller"));
const cars_controller_1 = __importDefault(require("./api/cars/cars.controller"));
const app = express_1.default();
app.use(express_1.default.json({ limit: "50mb" }));
app.use(stations_controller_1.default);
app.use(cars_controller_1.default);
app.listen(index_1.default.APP_PORT);
console.log("Serveur listening on:", index_1.default.APP_PORT);
//# sourceMappingURL=main.js.map