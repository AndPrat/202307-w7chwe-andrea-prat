import { robotsMock } from "../../../mocks/robotMocks";
import { Robot } from "../../../types";

import { loadRobotsActionCreator, robotsReducer } from "../robotsSlice";
import { RobotsState } from "../types";

describe("Given a loadRobots reducer", () => {
  describe("When it receives an robotState and loadRobots action with 'Wall-e' and 'Eva'", () => {
    test("Then it should return a new state with two users 'Wall-e' and 'Eva'", () => {
      const currentRobotsState: RobotsState = {
        robots: [],
      };
      const robots: Robot[] = robotsMock;

      const loadRobotsAction = loadRobotsActionCreator(robots);
      const newRobotState = robotsReducer(currentRobotsState, loadRobotsAction);

      expect(newRobotState).toHaveProperty("robots", robots);
    });
  });
});
