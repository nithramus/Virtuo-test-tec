import { Model, model, Schema, Query, Types } from "mongoose";
interface ICar {
  name: string;
}
interface ICarSchema extends ICar, Types.Subdocument {}

const CarSchema = new Schema({
  name: String,
});

export { ICar, CarSchema, ICarSchema };
