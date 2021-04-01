"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const yup = __importStar(require("yup"));
const station_models_1 = require("../../models/station.models");
let stationSchema = yup.object().shape({
    name: yup.string().defined().min(3),
});
const router = express_1.default.Router();
router.get("/stations", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stations = yield station_models_1.StationModel.find();
        res.send(stations);
    }
    catch (err) {
        res.send(500);
    }
}));
router.post("/station", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        try {
            yield stationSchema.isValid(req.body);
        }
        catch (err) {
            return res.send(400);
        }
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
router.delete("/station/:stationID", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
router.put("/station/:stationID", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const station = yield station_models_1.StationModel.findById(req.params.stationID);
        try {
            yield stationSchema.isValid(req.body);
        }
        catch (err) {
            return res.send(400);
        }
        station.set(req.body);
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