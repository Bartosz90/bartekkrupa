import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "../styles/app.sass";
import Nav from "./Nav";
import LanguageButton from "./LanguageButton";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import LoadingScreen from "./LoadingScreen";

export const StateContext = createContext();

function App() {
  const [state, setState] = useState({
    menuActive: false,
    loadingScreen: false,
    polishVersion: false,
    changingLanguage: false,
    firstVisit: true
  });

  (function hideOverflow() {
    if (state.menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  })();

  return (
    <Router>
      <StateContext.Provider value={[state, setState]}>
        <Nav />
        <LanguageButton />
        {state.loadingScreen && !state.firstVisit && <LoadingScreen />}
        <Switch>
          <Redirect exact from="/" to="/bartekkrupa" />
          <Route exact path="/bartekkrupa" component={Home} />
          <Route exact path="/bartekkrupa/about" component={About} />
          <Route exact path="/bartekkrupa/projects" component={Projects} />
          <Route exact path="/bartekkrupa/contact" component={Contact} />
        </Switch>
      </StateContext.Provider>
    </Router>
  );
}

export default App;
