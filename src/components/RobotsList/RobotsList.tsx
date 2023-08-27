import { useAppSelector } from "../../store";
import RobotCard from "../RobotCard/RobotCard";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector(({ robotsStore: { robots } }) => robots);

  return (
    <ul className="robots-list">
      {robots.map((robot) => (
        <li key={robot.id} className="robots-list__robot">
          +
          <RobotCard robot={robot} />
        </li>
      ))}
    </ul>
  );
};

export default RobotsList;
