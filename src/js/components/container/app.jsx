import React, { Component } from "react";
import { connect } from "react-redux";
import "./../../../scss/app.scss";
import { changeGreeting } from "./../../actions/index.js";
import { Switch, Route } from "react-router-dom";
import TestRouteView from "./../presentational/testRouteView.jsx";

const mapStateToProps = state => {
  return {
    greeting: state.greeting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeGreeting: greeting => dispatch(changeGreeting(greeting))
  };
};

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>{this.props.greeting}</h1>
        <button onClick={() => this.props.changeGreeting("Hi World")}>
          Press Me
        </button>
        <main className="main">
          <Switch>
            <Route path="/test" component={TestRouteView} />
          </Switch>
        </main>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
