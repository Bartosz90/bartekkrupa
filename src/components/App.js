import React, { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "../styles/app.sass";
import Test from "./Test";
import Nav from "./Nav";
import Loading from "./Loading";
import Particles from "./Particles";

export const StateContext = createContext();
export const LoadingContext = createContext();

function App() {
  const [state, setState] = useState({
    clickCounter: 0,
    title: "hello",
    name: "bartek",
    btns: { no1: 1, no2: 2, no3: 3 },
    menuActive: false,
    loading: false,
    flip: false
  });

  function handleLoading() {
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
  }

  const flipProject = () => {
    setState(state => ({ ...state, flip: !state.flip }));
  };
  return (
    <Router>
      <LoadingContext.Provider value={handleLoading}>
        <StateContext.Provider value={[state, setState]}>
          {/* <Test /> */}
          <Nav />
          {state.loading && <Loading />}
          {/* <Particles />  */}
        </StateContext.Provider>
      </LoadingContext.Provider>
    </Router>
  );
}

export default App;
