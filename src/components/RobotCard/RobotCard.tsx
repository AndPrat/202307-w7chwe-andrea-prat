import React from "react";
import { Robot } from "../../types";

export interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({
  robot: { name, image, speed, endurace },
}: RobotCardProps): React.ReactElement => {
  return (
    <article className="robot">
      <picture className="robot__picture">
        <img
          src={image}
          alt={`${name} robot`}
          width="200"
          height="200"
          className="robot__image"
        />
      </picture>
      <h2 className="robot__name">{name}</h2>
      <ul className="robot__list">
        <li className="robot__data">Speed: {speed}</li>
        <li className="robot__data">Endurace: {endurace}</li>
      </ul>
    </article>
  );
};

export default RobotCard;
