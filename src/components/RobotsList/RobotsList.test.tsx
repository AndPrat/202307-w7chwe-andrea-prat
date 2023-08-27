import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../../store";
import { robotsMock } from "../../mocks/robotMocks";
import RobotsList from "./RobotsList";

describe("Given an UsersList component", () => {
  describe("When is rendered with 'catwoman', 'jocker' and 'harley quinn' users card", () => {
    test("Then it should show the users 'catwoman', 'jocker' and 'harley quinn' inside heading", () => {
      const store = setupStore({
        robotsState: {
          robots: robotsMock,
        },
      });

      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>,
      );

      robotsMock.forEach((robot) => {
        const expectedRobotHeading = screen.getByRole("heading", {
          name: robot.name,
        });

        expect(expectedRobotHeading).toBeInTheDocument();
      });
    });
  });
});
