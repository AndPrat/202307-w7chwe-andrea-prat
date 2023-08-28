import { robotMock, robotsMock } from "../../../mocks/robotMocks";
import { addRobotActionCreator, robotsReducer } from "../robotsSlice";
import { RobotsState } from "../types";

describe("Given a addRobot reducer", () => {
  describe("When it receives an robotState and addRobot action with 'Wall-e'", () => {
    test("Then it should return a new state with new robot 'Wall-e'", () => {
      const currentRobotsState: RobotsState = {
        robots: robotsMock,
      };

      const addRobotAction = addRobotActionCreator(robotMock);
      const newRobotState = robotsReducer(currentRobotsState, addRobotAction);

      expect(newRobotState.robots).toContain(robotMock);
      expect(newRobotState.robots).toHaveLength(robotsMock.length + 1);
    });
  });
});
