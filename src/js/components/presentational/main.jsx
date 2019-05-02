import React from "react"; // React
import { Switch, Route } from "react-router-dom"; // React-Router
import Home from "./../container/home.jsx"; // Component
import About from "./../container/about.jsx"; // Component

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </main>
  );
};

export default Main;
