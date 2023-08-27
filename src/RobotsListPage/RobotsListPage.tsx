import { useEffect } from "react";
import useRobotsApi from "../hooks/useRobotsApi";
import { useAppDispatch } from "../store";
import { loadRobotsActionCreator } from "../store/robots/robotsSlice";

const RobotsLitsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRobots } = useRobotsApi();

  useEffect(() => {
    (async () => {
      const robots = await getRobots();

      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [dispatch, getRobots]);

  return (
    <>
      <h2 className="robots__list">Robots list</h2>
    </>
  );
};

export default RobotsLitsPage;
