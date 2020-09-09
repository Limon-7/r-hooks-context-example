import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import UseStateCounter from "./components/hooks-component/UseStateCounter";
import UseEffectContainer from "./components/hooks-component/UseEffectContainer";
import ClassCounter from "./components/class-components/ClassCounter";
import Navigation from "./components/navigation/Navigation";
import * as ROUTES from "./components/constant/routes";
import UseEffectClassContainer from "./components/class-components/UseEffectClassContainer";

function App() {
  const Home = () => {
    return (
      <div className="home">
        <h1>Welcome to page</h1>
        <p>This is for rect hook course</p>
      </div>
    );
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.USE_STATE} component={UseStateCounter} />
          <Route path={ROUTES.USE_STATE_CLASS} component={ClassCounter} />
          <Route path={ROUTES.USE_EFFECT_HOME} component={UseEffectContainer} />
          <Route
            path={ROUTES.USE_EFFECT_CLASS_HOME}
            component={UseEffectClassContainer}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
