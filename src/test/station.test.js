const assert = require("assert");
const UserOne = require("superagent").agent();
const utils = require("./test-utils");

let createdStation;

describe("client", () => {
  describe("Stations", () => {
    it("Get a station", async () => {
      const stations = await utils.getStations(UserOne);
    });
    it("Create a station", async () => {
      const station = await utils.createStation(UserOne);
      createdStation = station._id;
    });
    it("update a station", async () => {
      await utils.updateStation(UserOne, createdStation);
    });
  });
});
