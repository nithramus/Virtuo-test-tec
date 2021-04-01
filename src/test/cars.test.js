const assert = require("assert");
const UserOne = require("superagent").agent();
const utils = require("./test-utils");

let createdCarID;
let stationId;
describe("client", () => {
  before(async () => {
    const station = await utils.createStation(UserOne);
    stationId = station._id;
  });
  describe("Cars", () => {
    it("Add a car to station", async () => {
      const car = await utils.createCar(UserOne, stationId);
      createdCarID = car._id;
    });
    it("Get cars", async () => {
      const cars = await utils.getCars(UserOne, stationId);
      console.log(cars);
      assert.notStrictEqual(cars.length, 0);
    });
    it("update a car", async () => {
      const station = await utils.createStation(UserOne);

      await utils.updateCar(UserOne, stationId, createdCarID, {
        name: "updatedName",
      });
    });
  });
});
