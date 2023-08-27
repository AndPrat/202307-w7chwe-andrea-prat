import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header componnet", () => {
  describe("When it's rendered with the text 'Robots'", () => {
    test("Then it should show the text 'Robots' in the heading", () => {
      const expectedTextHeding = "Robots";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const header = screen.getByRole("heading", { name: expectedTextHeding });

      expect(header).toBeInTheDocument();
    });
  });
});
