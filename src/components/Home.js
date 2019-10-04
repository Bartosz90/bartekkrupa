import React, { useState } from "react";
import "../styles/home.sass";

const Home = () => {
  const [translateZ, setTranslateZ] = useState({
    firstDiv: 0,
    secondDiv: -1000,
    thirdDiv: -2000
  });
  const { firstDiv, secondDiv, thirdDiv } = translateZ;

  const handleTranslate = dir => {
    if (dir === "up") {
      setTranslateZ({
        firstDiv: firstDiv + 1000,
        secondDiv: secondDiv + 1000,
        thirdDiv: thirdDiv + 1000
      });
    } else {
      setTranslateZ({
        firstDiv: firstDiv - 1000,
        secondDiv: secondDiv - 1000,
        thirdDiv: thirdDiv - 1000
      });
    }
  };
  return (
    <>
      <header className="header">
        <div
          className="deep deep3"
          style={{
            transform: `translate(-50%,-50%) translateZ(${thirdDiv}px)`
          }}
        >
          <h1>Check out the menu above!</h1>
        </div>
        <div
          className="deep deep2"
          style={{
            transform: `translate(-50%,-50%) translateZ(${secondDiv.toString()}px)`
          }}
        >
          <h1>I design and code websites</h1>
        </div>
        <div
          className="deep deep1"
          style={{
            transform: `translate(-50%,-50%) translateZ(${firstDiv.toString()}px)`
          }}
        >
          <h1>hello, I'm Bartek</h1>
        </div>
        <button className="arrow arrowUp" onClick={() => handleTranslate("up")}>
          <i class="fas fa-angle-double-up"></i>
        </button>
        <button
          className="arrow arrowDown"
          onClick={() => handleTranslate("down")}
        >
          <i class="fas fa-angle-double-down"></i>
        </button>
      </header>
    </>
  );
};

export default Home;
