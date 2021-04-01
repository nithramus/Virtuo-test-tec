import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { ICar, CarSchema, ICarSchema } from "./car.models";

interface IStation {
  name: string;
  cars: Array<ICar>;
}

interface IStationSchema extends Document {
  cars: Types.DocumentArray<ICarSchema>;
}

const StationSchema: Schema = new Schema({
  name: String,
  cars: [CarSchema],
});

const StationModel: Model<IStationSchema> = model("Station", StationSchema);
export { StationModel, IStation, IStationSchema };
