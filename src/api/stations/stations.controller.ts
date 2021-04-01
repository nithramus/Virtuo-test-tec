import express from "express";
import * as yup from "yup";

import { StationModel, IStation } from "../../models/station.models";

let stationSchema = yup.object().shape({
  name: yup.string().defined().min(3),
});

const router = express.Router();
router.get("/stations", async (req, res, next) => {
  try {
    const stations = await StationModel.find();
    res.send(stations);
  } catch (err) {
    res.send(500);
  }
});

router.post("/station", async (req, res, next) => {
  try {
    try {
      await stationSchema.isValid(req.body);
    } catch (err) {
      return res.send(400);
    }
    const station: IStation = {
      name: req.body.name,
      cars: [],
    };
    let createdStation = await StationModel.create(station);
    res.send(createdStation);
  } catch (err) {
    res.send(500);
  }
});

router.delete("/station/:stationID", async (req, res, next) => {
  try {
    const stations = await StationModel.deleteOne({
      _id: req.params.stationID,
    });
    res.send(200);
  } catch (err) {
    res.send(500);
  }
});

router.put("/station/:stationID", async (req, res, next) => {
  try {
    const station = await StationModel.findById(req.params.stationID);
    try {
      await stationSchema.isValid(req.body);
    } catch (err) {
      return res.send(400);
    }
    station.set(req.body);
    station.save();
    res.send(station);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});
export default router;
