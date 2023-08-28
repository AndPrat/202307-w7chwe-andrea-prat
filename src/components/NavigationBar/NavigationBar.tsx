import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = (): React.ReactElement => {
  return (
    <nav className="navigation">
      <ul className="navigation__elements">
        <li>
          <NavLink to="/robots" className="navigation__home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/create-robot" className="navigation__create">
            Create
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
