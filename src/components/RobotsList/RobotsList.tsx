import { useAppSelector } from "../../store";
import RobotCard from "../RobotCard/RobotCard";
import "./RobotsList.css";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector((state) => state.robotsState.robots);

  return (
    <>
      <div className="container">
        <h2 className="robots__title">Robots list</h2>

        <ul className="robots-list">
          {robots.map((robot) => (
            <li key={robot.id} className="robots-list__robot">
              <RobotCard robot={robot} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RobotsList;
