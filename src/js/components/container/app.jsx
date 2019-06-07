import React, { Component } from "react"; // React
import "./../../../scss/app.scss"; // SCSS
import "./../../../scss/index.scss"; // SCSS
import Main from "./../presentational/main.jsx"; // Component
import Footer from "./../presentational/footer.jsx"; // Component

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {/* Main Component */}
        <Main />
        {/* Footer Component */}
        <Footer />
      </>
    );
  }
}

export default App;
