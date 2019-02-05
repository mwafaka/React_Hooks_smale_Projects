import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import CustomNavbar from "./components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/news" Component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
