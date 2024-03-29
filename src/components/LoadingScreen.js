import React from "react";
import logo from "../img/logo5.png";
import "../styles/loadingScreen.sass";

const LoadingScreen = () => {
  return (
    <div
      className="loadingScreen"
      style={{ backgroundImage: `url(${logo})` }}
    ></div>
  );
};

export default LoadingScreen;
