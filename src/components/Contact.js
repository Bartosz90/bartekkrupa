import React, { useContext, useEffect } from "react";
import { StateContext } from "./App";

const Contact = () => {
  const [state, setState] = useContext(StateContext);

  useEffect(() => {
    setState(state => ({ ...state, loadingScreen: true }));
    setTimeout(() => {
      setState(state => ({
        ...state,
        loadingScreen: false
      }));
    }, 1200);
  }, [setState]);
  return (
    <>
      {!state.loadingScreen && (
        <div>
          <h1>contact</h1>
        </div>
      )}
    </>
  );
};

export default Contact;
