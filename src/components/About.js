import React, { useState, useContext } from "react";
import { StateContext } from "./App";
import "../styles/about.sass";

const About = () => {
  const [state] = useContext(StateContext);
  const [particlesState, setParticlesState] = useState({
    moveParticles: false,
    colorParticles: false
  });

  const { moveParticles, colorParticles } = particlesState;

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

  const timings = ["linear", "ease", "ease-in-out", "ease-in", "ease-out"];
  const particles = particlesNumber.map(particle => {
    const dimensions = getRandomInt(2, 6);
    const positionY = getRandomInt(2, 98);
    const positionX = getRandomInt(2, 98);
    const animation = getRandomInt(1, 4);
    const delay = getRandomArbitrary(0, 8);
    const direction = getRandomInt(0, 1);
    const duration = getRandomArbitrary(5, 8);
    const timing = getRandomInt(0, 4);
    const red = getRandomInt(1, 255);
    const green = getRandomInt(1, 255);
    const blue = getRandomInt(1, 255);
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
          animationTimingFunction: `${timings[timing]}`,
          animationDelay: `${delay}s`,
          animationDirection: `${direction ? "normal" : "reverse"}`,
          animationDuration: `${duration}s`,
          backgroundColor: `${
            colorParticles ? `rgb(${red}, ${green}, ${blue})` : "white"
          }`
        }}
      ></div>
    );
  });
  return (
    <>
      {!state.loading && (
        <div
          // onClick={() =>
          //   setParticlesState({
          //     ...particlesState,
          //     moveParticles: !moveParticles
          //   })
          // }
          className={"particlesDiv"}
        >
          {particles}
        </div>
      )}
      <button
        className={colorParticles ? "colorChanger white" : "colorChanger color"}
        onClick={() => {
          setParticlesState({
            ...state,
            colorParticles: !colorParticles
          });
        }}
      >
        <i className="fas fa-paint-brush"></i>
      </button>
    </>
  );
};

export default About;
