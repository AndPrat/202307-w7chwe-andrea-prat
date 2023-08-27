export interface Robot {
  id: string;
  name: string;
  image: string;
  speed: number;
  endurance: number;
}

export interface RobotsApi {
  robots: RobotApi[];
}

export interface RobotApi extends Omit<Robot, "id"> {
  _id: string;
}
