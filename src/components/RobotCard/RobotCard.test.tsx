import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { robotMock, robotsMock } from "../../mocks/robotMocks";
import { setupStore } from "../../store";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it receives a robot name 'Wall-e'", () => {
    test("Then it should show the name 'Wall-e' inside a heading", () => {
      const expectedHeaderText = "Wall-e";
      const store = setupStore({
        robotsState: {
          robots: robotsMock,
        },
      });

      render(
        <Provider store={store}>
          <RobotCard robot={robotMock} />
        </Provider>,
      );

      const robotHeading = screen.getByRole("heading", {
        name: expectedHeaderText,
      });

      expect(robotHeading).toBeInTheDocument();
    });
  });
});
