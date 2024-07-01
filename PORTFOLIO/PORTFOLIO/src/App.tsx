import React from "react";
import Jumbotron from "./Component/Jumbotron";
import Navbar from "./Component/Navbar";
import Portfolio from "./Component/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
      <Portfolio />
    </React.Fragment>
  );
}

export default App;
