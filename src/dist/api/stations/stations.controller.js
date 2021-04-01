"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const station_models_1 = require("../../models/station.models");
const router = express_1.default.Router();
router.get("/stations", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const stations = yield station_models_1.StationModel.find();
        res.send(stations);
    }
    catch (err) {
        res.send(500);
    }
}));
router.post("/station", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const station = {
            name: req.body.name,
            cars: [],
        };
        let createdStation = yield station_models_1.StationModel.create(station);
        res.send(createdStation);
    }
    catch (err) {
        res.send(500);
    }
}));
router.delete("/station/:stationID", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const stations = yield station_models_1.StationModel.deleteOne({
            _id: req.params.stationID,
        });
        res.send(200);
    }
    catch (err) {
        res.send(500);
    }
}));
router.put("/station/:stationID", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const station = yield station_models_1.StationModel.findById(req.params.stationID);
        station.set({ name: req.body.name });
        station.save();
        res.send(station);
    }
    catch (err) {
        console.log(err);
        res.send(500);
    }
}));
exports.default = router;
//# sourceMappingURL=stations.controller.js.map