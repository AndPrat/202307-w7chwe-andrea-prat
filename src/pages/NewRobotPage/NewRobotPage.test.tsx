import { render, screen } from "@testing-library/react";
import NewRobotPage from "./NewRobotPage";

describe("Given a NewRobotPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Create a robot' title inside heading", () => {
      const expectedTitleHeading = "Create a robot";

      render(<NewRobotPage />);

      const heading = screen.getByRole("heading", {
        name: expectedTitleHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
