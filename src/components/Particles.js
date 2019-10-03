import React, { useState } from "react";

const Particles = () => {
  const [pinkMode, togglePinkMode] = useState(false);
  const particlesNumber = [];

  for (let i = 0; i < 60; i++) {
    particlesNumber.push(i);
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const particles = particlesNumber.map(particle => {
    let dimensions = getRandomInt(2, 6);
    let positionY = getRandomInt(2, 98);
    let positionX = getRandomInt(2, 98);
    let animation = getRandomInt(1, 4);
    let delay = getRandomArbitrary(0, 8);
    let direction = getRandomInt(0, 1);
    let duration = getRandomArbitrary(5, 8);
    return (
      <div
        className="particle"
        key={particle}
        style={{
          width: `${dimensions}px`,
          height: `${dimensions}px`,
          top: `${positionY}vh`,
          left: `${positionX}vw`,
          animation: `particle${animation} infinite`,
          animationDelay: `${delay}s`,
          animationDirection: `${direction ? "normal" : "reverse"}`,
          animationDuration: `${duration}s`,
          backgroundColor: `${pinkMode ? "#950740" : "#fff"}`
        }}
      ></div>
    );
  });

  return (
    <div onClick={() => togglePinkMode(!pinkMode)} className={"particlesDiv"}>
      {particles}
    </div>
  );
};

export default Particles;
