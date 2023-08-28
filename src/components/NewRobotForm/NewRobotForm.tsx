import { useState } from "react";
import { Robot } from "../../types";
import "./NewRobotForm.css";

const NewRobotForm = (): React.ReactElement => {
  const initialRobotData: Partial<Robot> = {
    name: "",
    image: "",
    speed: 0,
    endurance: 0,
  };
  const [, setNewRobot] = useState<Partial<Robot>>(initialRobotData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRobot((newRobot) => ({
      ...newRobot,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <form className="robot-form">
      <div className="robot-form__group">
        <label htmlFor="name" className="robot-form__label">
          Robot name:
        </label>
        <input
          type="text"
          id="name"
          className="robot-form__input"
          onChange={handleChange}
        />
      </div>
      <div className="robot-form__group">
        <label htmlFor="url" className="robot-form__label">
          Url robot image:
        </label>
        <input
          type="url"
          id="urlImage"
          className="robot-form__input"
          onChange={handleChange}
        />
      </div>
      <div className="robot-form__group">
        <label htmlFor="speed" className="robot-form__label">
          Speed:
        </label>
        <input
          type="number"
          id="speed"
          min={0}
          max={10}
          className="robot-form__input"
          onChange={handleChange}
        />
      </div>
      <div className="robot-form__group">
        <label htmlFor="endurance" className="robot-form__label">
          Endurance:
        </label>
        <input
          type="endurance"
          id="endurance"
          min={0}
          max={10}
          className="robot-form__input"
          onChange={handleChange}
        />
      </div>
      <div className="robot-form__group">
        <button className="robot-form__button">Create a robot</button>
      </div>
    </form>
  );
};

export default NewRobotForm;
