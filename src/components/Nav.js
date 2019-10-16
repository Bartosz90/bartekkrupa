import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StateContext } from "./App";
import "../styles/nav.sass";

const Nav = () => {
  const [state, setState] = useContext(StateContext);

  const toggleMenu = () => {
    setState(state => ({
      ...state,
      menuActive: !state.menuActive
    }));
  };

  const links = [
    { id: 1, name: "home", namePl: "główna", path: "/" },
    { id: 2, name: "about", namePl: "o mnie", path: "/about" },
    { id: 3, name: "projects", namePl: "projekty", path: "/projects" },
    { id: 4, name: "contact", namePl: "kontakt", path: "/contact" }
  ];

  const navLinks = links.map(link => (
    <NavLink
      key={link.id}
      exact
      to={link.path}
      className="navBtn"
      activeClassName="selected"
      onClick={toggleMenu}
    >
      {state.polishVersion ? link.namePl : link.name}
    </NavLink>
  ));
  return (
    <nav className={state.menuActive ? "nav active" : "nav"}>
      <button onClick={toggleMenu} className="hamburger">
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </button>

      <div className="menuBackground"></div>

      <h3 className="menuHeader">menu</h3>

      <div className="linkContainer">{navLinks}</div>
    </nav>
  );
};

export default Nav;
