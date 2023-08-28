import { render, screen } from "@testing-library/react";
import NewRobotForm from "./NewRobotForm";

describe("Given a NewRobotForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show button with name 'Create a robot'", () => {
      const expectedNameButton = "Create a robot";

      render(<NewRobotForm />);
      const buttonRobotForm = screen.getByRole("button", {
        name: expectedNameButton,
      });

      expect(buttonRobotForm).toBeInTheDocument();
    });

    test("Then it should show a label with name 'Robot name:'", () => {
      const expectedNameLabel = "Robot name:";

      render(<NewRobotForm />);
      const nameLabelRobotForm = screen.getByLabelText(expectedNameLabel);

      expect(nameLabelRobotForm).toBeInTheDocument();
    });
  });
});
