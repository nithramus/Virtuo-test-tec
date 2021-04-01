import express from "express";
import { StationModel, IStationSchema } from "../../models/station.models";
import * as yup from "yup";

let carSchema = yup.object().shape({
  name: yup.string().required().min(3),
  available: yup.boolean(),
});

const router = express.Router();
interface IRequestWithStation extends express.Request {
  station: IStationSchema;
}
async function getStation(
  req: IRequestWithStation,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    if (!req.params.stationID) {
      return res.sendStatus(404);
    }
    req.station = await StationModel.findById(req.params.stationID);
    if (!req.station) {
      return res.sendStatus(404);
    }
    next();
  } catch (err) {
    next(err);
  }
}

router.get(
  "/station/:stationID/cars",
  getStation,
  async (req: IRequestWithStation, res, next) => {
    return res.send(req.station.cars);
  }
);
router.post(
  "/station/:stationID/car",
  getStation,
  async (req: IRequestWithStation, res, next) => {
    try {
      await carSchema.isValid(req.body);
    } catch (err) {
      return res.send(400);
    }
    const car = req.station["cars"].create(req.body);
    req.station.cars.push(car);
    req.station.save();
    return res.send(car.toJSON());
  }
);

router.delete(
  "/station/:stationID/car/:carID",
  getStation,
  async (req: IRequestWithStation, res, next) => {
    const car = req.station.cars.id(req.params.cardID);
    car.remove();
    await req.station.save();
    return res.send(200);
  }
);

router.put(
  "/station/:stationID/car/:carID",
  getStation,
  async (req: IRequestWithStation, res, next) => {
    try {
      await carSchema.isValid(req.body);
    } catch (err) {
      return res.send(400);
    }
    const car = req.station.cars.id(req.params.carID);
    car.set(req.body);
    await req.station.save();
    return res.send(200);
  }
);

export default router;
