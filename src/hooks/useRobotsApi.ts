import axios from "axios";
import { useCallback } from "react";
import { Robot } from "../types";

export const apiUrl = import.meta.env.VITE_API_URL;

const useRobotsApi = () => {
  const getRobots = useCallback(async (): Promise<Robot[]> => {
    const { data: apiRobots } = await axios.get<Robot[]>(`${apiUrl}/robots`);

    const robots = apiRobots.map<Robot>(
      ({ id, name, image, speed, endurance }) => ({
        id,
        name,
        image,
        speed,
        endurance,
      }),
    );

    return robots;
  }, []);

  return { getRobots };
};

export default useRobotsApi;
