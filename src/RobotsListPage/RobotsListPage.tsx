import { useEffect } from "react";
import useRobotsApi from "../hooks/useRobotsApi";
import { useAppDispatch } from "../store";
import { loadRobotsActionCreator } from "../store/robots/robotsSlice";
import "./RobotsListPage.css";
import RobotsList from "../components/RobotsList/RobotsList";

const RobotsListPage = (): React.ReactElement => {
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
      <RobotsList />
    </>
  );
};

export default RobotsListPage;
