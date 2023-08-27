import React from "react";
import { Robot } from "../../types";
import "./RobotCard.css";

export interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({
  robot: { name, image, speed, endurance },
}: RobotCardProps): React.ReactElement => {
  const imagePath = image.substring(0, 50);
  const imageId = image.substring(62);
  const processedImage = `${imagePath}w_500,f_auto/${imageId}`;
  return (
    <article className="robot">
      <picture className="robot__picture">
        <img
          src={processedImage}
          alt={`${name} robot`}
          width="200"
          height="200"
          className="robot__image"
        />
      </picture>
      <h2 className="robot__name">{name}</h2>
      <ul className="robot__list">
        <li className="robot__data">Speed: {speed}</li>
        <li className="robot__data">Endurance: {endurance}</li>
      </ul>
    </article>
  );
};

export default RobotCard;
