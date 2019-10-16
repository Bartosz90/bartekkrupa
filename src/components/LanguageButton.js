import React, { useContext } from "react";
import { StateContext } from "./App";
import "../styles/language.sass";

const LanguageButton = () => {
  const [state, setState] = useContext(StateContext);

  const changeLanguage = () => {
    setState(state => ({
      ...state,
      polishVersion: !state.polishVersion,
      changingLanguage: true
    }));
    setTimeout(() => {
      setState(state => ({ ...state, changingLanguage: false }));
    }, 1000);
  };

  return (
    <button className="languageBtn" onClick={changeLanguage}>
      {state.polishVersion ? "ENG" : "PL"}
    </button>
  );
};

export default LanguageButton;
