import { Robot, RobotsApi } from "../types";

export const robotsMock: Robot[] = [
  {
    id: "64e9be7603ea5eb1b298d0ff",
    name: "Wall-e",
    image:
      "https://cosmocaixa.org/documents/139771/351893/WALL+E+OK+SIN+RECURSO+spa2AG+-+2422+-+18245jpg/c15e2c4e-2c8a-9216-ced1-fb5db4d38fbd?version=1.0&t=1568814933620",
    speed: 5,
    endurance: 6,
  },
  {
    id: "64e9c15203ea5eb1b298d100",
    name: "Eva",
    image: "https://www.spotern.com/es/product/67321?spotID=97980",
    speed: 8,
    endurance: 7,
  },
];

export const robotMock: Robot = {
  id: "64e9be7603ea5eb1b298d0ff",
  name: "Wall-e",
  image:
    "https://cosmocaixa.org/documents/139771/351893/WALL+E+OK+SIN+RECURSO+spa2AG+-+2422+-+18245jpg/c15e2c4e-2c8a-9216-ced1-fb5db4d38fbd?version=1.0&t=1568814933620",
  speed: 5,
  endurance: 6,
};

export const apiRobotsMock: RobotsApi = {
  robots: [
    {
      _id: "64e9be7603ea5eb1b298d0ff",
      name: "Wall-e",
      image:
        "https://cosmocaixa.org/documents/139771/351893/WALL+E+OK+SIN+RECURSO+spa2AG+-+2422+-+18245jpg/c15e2c4e-2c8a-9216-ced1-fb5db4d38fbd?version=1.0&t=1568814933620",
      speed: 5,
      endurance: 6,
    },
    {
      _id: "64e9c15203ea5eb1b298d100",
      name: "Eva",
      image: "https://www.spotern.com/es/product/67321?spotID=97980",
      speed: 8,
      endurance: 7,
    },
  ],
};
