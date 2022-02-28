
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

import Routes from "./routes";
class App extends React.Component {


  render() {
    return (
      <>
        <NavBar />

        <Routes />
        
        <Footer />
      </>
    )
  }
}

export default App;
