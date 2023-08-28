import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Robots</h1>
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
