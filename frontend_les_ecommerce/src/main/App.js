
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import 'toastr/build/toastr.min.js'

import 'toastr/build/toastr.min'

import 'toastr/build/toastr.css'

import Routes from "./routes";
import LineChart from "../views/admin/dashBoard/LineChart";

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
