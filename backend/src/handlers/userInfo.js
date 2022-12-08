const express = require("express");
const infoRouter = express.Router();

const { faker } = require("@faker-js/faker");

infoRouter.get("/userinfo", (request, response) => {
  let count = 10;
  const userData = [];
  for (let id = 1; id <= count; id++) {
    userData.push({
      id: id,
      userName: faker.internet.userName(),
      avater: faker.internet.avatar(),
      name: faker.name.fullName(),
      age: faker.date.birthdate({ min: 25, max: 65, mode: "age" }),
      phoneNumber: faker.phone.number(),
      address: faker.address.country(),
      jobType: faker.name.jobType(),
      jobTitle: faker.name.jobTitle(),
      vehicleInformation: [
        {
          car: faker.vehicle.vehicle(),
          manufacturer: faker.vehicle.manufacturer(),
          model: faker.vehicle.model(),
          carAge: faker.date.past(10, "2020-01-01T00:00:00.000Z"),
        },
      ],
    });
  }
  response.json({
    userData,
  });
});

module.exports = {
  infoRouter,
};
