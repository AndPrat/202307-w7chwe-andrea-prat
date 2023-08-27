import Header from "../Header/Header";
import paths from "../../paths/paths";
import { Navigate, Route, Routes } from "react-router-dom";
import RobotsListPage from "../../RobotsListPage/RobotsListPage";

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
