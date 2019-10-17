import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "./App";
import Letters from "./Letters";
import "../styles/home.sass";

const Home = () => {
  const [state, setState] = useContext(StateContext);
  const [animationsDone, setAnimationsDone] = useState(false);
  const [descriptionIndex, changeDescriptionIndex] = useState(0);

  useEffect(() => {
    setState(state => ({ ...state, loadingScreen: true }));
    setTimeout(() => {
      setState(state => ({
        ...state,
        loadingScreen: false,
        firstVisit: false
      }));
    }, 1200);
    setTimeout(() => {
      setAnimationsDone(true);
    }, 5500);
  }, [setState]);

  const greeting = ["H", "e", "l", "l", "o,"];
  const greetingPl = ["C", "z", "e", "ś", "ć,"];
  const name = ["I", "'", "m", "-", "B", "a", "r", "t", "e", "k."];
  const namePl = [
    "j",
    "e",
    "s",
    "t",
    "e",
    "m",
    "-",
    "B",
    "a",
    "r",
    "t",
    "e",
    "k."
  ];

  function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const marks = ["", "-"];

  const transform = () => {
    return `translate(${getRandomInt(10, 75)}vw, ${
      marks[getRandomInt(0, 1)]
    }${getRandomInt(5, 35)}vh)`;
  };

  const mapThroughWords = word => {
    const header = word.map((letter, index) => {
      return (
        <span
          key={index}
          style={{
            animation: `${
              animationsDone ? "none" : "letterAppear 1s forwards"
            }`,
            transform: `${animationsDone ? "none" : transform()}`,
            animationDelay: `${getRandomArbitrary(1.5, 2.5)}s`,
            visibility: `${letter === "-" ? "hidden" : ""}`
          }}
        >
          {letter}
        </span>
      );
    });
    return header;
  };

  const headerDescriptions = [
    "I code web apps.",
    "I design websites.",
    "I'm front-end dev."
  ];
  const headerDescriptionsPl = [
    "Tworzę aplikacje webowe.",
    "Projektuję strony.",
    "Jestem front-end devem."
  ];

  return (
    <>
      {!state.loadingScreen && (
        <header className="header">
          {!animationsDone && <Letters />}
          <h1
            style={{
              animation: `${
                state.changingLanguage ? "changingLanguage 1s" : ""
              }`
            }}
          >
            {state.polishVersion
              ? mapThroughWords(greetingPl)
              : mapThroughWords(greeting)}
          </h1>
          <h1
            style={{
              animation: `${
                state.changingLanguage ? "changingLanguage 1s" : ""
              }`
            }}
          >
            {state.polishVersion
              ? mapThroughWords(namePl)
              : mapThroughWords(name)}
          </h1>
          <h1 className="skill skill1">
            {state.polishVersion
              ? headerDescriptionsPl[0]
              : headerDescriptions[0]}
          </h1>
          <h1 className="skill skill2">
            {state.polishVersion
              ? headerDescriptionsPl[1]
              : headerDescriptions[1]}
          </h1>
          <h1 className="skill skill3">
            {state.polishVersion
              ? headerDescriptionsPl[2]
              : headerDescriptions[2]}
          </h1>
          <div className="whiteBackground"></div>
        </header>
      )}
    </>
  );
};

export default Home;
