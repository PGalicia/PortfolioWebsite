import React from "react"; // React
import { Switch, Route } from "react-router-dom"; // React-Router
import Home from "./../container/home.jsx"; // Component
import About from "./../container/about.jsx"; // Component
import ProjectView from "./../presentational/projectView.jsx"; // Component

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project/:id" component={ProjectView} />
      </Switch>
    </main>
  );
};

export default Main;
