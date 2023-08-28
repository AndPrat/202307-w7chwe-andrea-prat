import { Navigate, Route, Routes } from "react-router-dom";
import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import paths from "../../paths/paths";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path={paths.robots} element={<RobotsListPage />} />
          <Route path="/" element={<Navigate to={paths.robots} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
