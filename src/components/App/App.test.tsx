import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../store";
import { Provider } from "react-redux";
import App from "./App";
import { robotsMock } from "../../mocks/robotMocks";

describe("Given an App component", () => {
  const store = setupStore({
    robotsState: {
      robots: robotsMock,
    },
  });

  describe("When it is rendered", () => {
    test("Then it should show the text 'Robots list", () => {
      const expectedHeading = "Robots list";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
