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
const station_models_1 = require("../../models/station.models");
const yup = __importStar(require("yup"));
let carSchema = yup.object().shape({
    name: yup.string().required().min(3),
    available: yup.boolean(),
});
const router = express_1.default.Router();
function getStation(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.params.stationID) {
                return res.sendStatus(404);
            }
            req.station = yield station_models_1.StationModel.findById(req.params.stationID);
            if (!req.station) {
                return res.sendStatus(404);
            }
            next();
        }
        catch (err) {
            next(err);
        }
    });
}
router.get("/station/:stationID/cars", getStation, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send(req.station.cars);
}));
router.post("/station/:stationID/car", getStation, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield carSchema.isValid(req.body);
    }
    catch (err) {
        return res.send(400);
    }
    const car = req.station["cars"].create(req.body);
    req.station.cars.push(car);
    req.station.save();
    return res.send(car.toJSON());
}));
router.delete("/station/:stationID/car/:carID", getStation, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const car = req.station.cars.id(req.params.cardID);
    car.remove();
    yield req.station.save();
    return res.send(200);
}));
router.put("/station/:stationID/car/:carID", getStation, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield carSchema.isValid(req.body);
    }
    catch (err) {
        return res.send(400);
    }
    const car = req.station.cars.id(req.params.carID);
    car.set(req.body);
    yield req.station.save();
    return res.send(200);
}));
exports.default = router;
//# sourceMappingURL=cars.controller.js.map