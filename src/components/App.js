import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "../styles/app.sass";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import LoadingScreen from "./LoadingScreen";

export const StateContext = createContext();

function App() {
  const [state, setState] = useState({
    menuActive: false,
    loading: false
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
        {state.loading && <LoadingScreen />}
        <Switch>
          <Redirect from="bartekkrupa" to="/" />
          <Route exact path="/bartekkrupa" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        {/* <Particles />  */}
      </StateContext.Provider>
    </Router>
  );
}

export default App;
