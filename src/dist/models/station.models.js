"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationModel = void 0;
const mongoose_1 = require("mongoose");
const car_models_1 = require("./car.models");
const StationSchema = new mongoose_1.Schema({
    name: String,
    cars: [car_models_1.CarSchema],
});
const StationModel = mongoose_1.model("Station", StationSchema);
exports.StationModel = StationModel;
//# sourceMappingURL=station.models.js.map