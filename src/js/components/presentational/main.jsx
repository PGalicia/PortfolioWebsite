import React from "react"; // React
import { Switch, Route } from "react-router-dom"; // React-Router
import Home from "./../container/home.jsx";

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
};

export default Main;
