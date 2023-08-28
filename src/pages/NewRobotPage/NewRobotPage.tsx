import NewRobotForm from "../../components/NewRobotForm/NewRobotForm";
import "./NewRobotPage.css";

const NewRobotPage = (): React.ReactElement => {
  return (
    <>
      <div className="container">
        <h2 className="robot__title">Create a robot</h2>
        <NewRobotForm />
      </div>
    </>
  );
};

export default NewRobotPage;
