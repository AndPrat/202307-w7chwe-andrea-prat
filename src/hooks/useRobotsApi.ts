import axios from "axios";
import { useCallback } from "react";
import { Robot, RobotApi } from "../types";

const useRobotsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getRobots = useCallback(async () => {
    try {
      const { data: apiRobots } = await axios.get<{ robots: RobotApi[] }>(
        `${apiUrl}/robots`,
      );

      const robots = apiRobots.robots.map<Robot>(
        ({ _id, name, image, speed, endurance }) => ({
          id: _id,
          name,
          image,
          speed,
          endurance,
        }),
      );

      return robots;
    } catch {
      throw new Error("Couldn't load robots");
    }
  }, [apiUrl]);

  return { getRobots };
};

export default useRobotsApi;
