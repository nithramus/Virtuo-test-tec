function randomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  async getStations(request) {
    const res = await request.get("http://localhost:3000/stations");
    return res.body;
  },

  async createStation(request) {
    const reponse = await request.post("http://localhost:3000/station").send({
      name: randomString(20),
    });
    return reponse.body;
  },
  async updateStation(request, stationID) {
    await request.put("http://localhost:3000/station/" + stationID).send({
      name: randomString(20),
    });
  },
  async getCars(request, stationID) {
    const response = await request.get(
      `http://localhost:3000/station/${stationID}/cars`
    );
    return response.body;
  },

  async createCar(request, stationID) {
    const response = await request.post(
      `http://localhost:3000/station/${stationID}/car`
    );
    return response.body;
  },
  async deleteCar(request, stationID, carID) {
    const response = await request.post(
      `http://localhost:3000/station/${stationID}/car/${carID}`
    );
    return response.body;
  },
  async updateCar(request, stationID, carID, params) {
    const response = await request
      .put(`http://localhost:3000/station/${stationID}/car/${carID}`)
      .send(params);
    return response.body;
  },
};
