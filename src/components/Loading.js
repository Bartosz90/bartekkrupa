import React from "react";
import logo from "../img/logo.png";
import "../styles/loading.sass";

const Loading = () => {
  return (
    <div className="loader" style={{ backgroundImage: `url(${logo})` }}></div>
  );
};

export default Loading;
