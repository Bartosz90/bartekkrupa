import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StateContext } from "./App";
import { LoadingContext } from "./App";
import "../styles/nav.sass";

const Nav = () => {
  const [state, setState] = useContext(StateContext);
  const handleLoadingScreen = useContext(LoadingContext);

  const toggleMenu = () => {
    setState(state => ({
      ...state,
      menuActive: !state.menuActive
    }));
  };
  const handleSectionChange = () => {
    toggleMenu();
    setState(state => ({
      ...state,
      loading: true
    }));
    setTimeout(() => {
      setState(state => ({
        ...state,
        loading: false
      }));
    }, 2000);
  };

  const links = [
    { id: 1, name: "home", path: "/" },
    { id: 2, name: "about", path: "/about" },
    { id: 3, name: "projects", path: "/projects" },
    { id: 4, name: "contact", path: "/contact" }
  ];

  const navLinks = links.map(link => (
    <NavLink
      key={link.id}
      exact
      to={link.path}
      className="navBtn"
      activeClassName="selected"
      onClick={
        window.location.pathname !== link.path
          ? handleSectionChange
          : toggleMenu
      }
    >
      {link.name}
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

      <div onClick={toggleMenu} className="linkContainer">
        {navLinks}
      </div>
    </nav>
  );
};

export default Nav;
