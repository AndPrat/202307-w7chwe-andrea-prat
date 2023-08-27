import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { robotsMock } from "../mocks/robotMocks";
import { setupStore } from "../store";
import RobotsLitsPage from "./RobotsListPage";

describe("Given a RobotsListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Robots list'", () => {
      const expectedHeadingText = "Robots list";
      const store = setupStore({
        robotsState: {
          robots: robotsMock,
        },
      });

      render(
        <Provider store={store}>
          <RobotsLitsPage />
        </Provider>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
