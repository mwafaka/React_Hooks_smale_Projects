import React, { Component } from "react";
import Header from "./components/Header";
import Finder from "./components/Finder";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    name: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({ user: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  componentDidMount() {
    const user = {
      name: this.state.name
    };
    const client_id = "d12006b9cddbbf99bcab";
    const client_secret = "bf47bc66a048a5c1d1606cc10aaa0a67c4d0f1d0";
    axios
      .get(
        `http://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(res => this.setState({ name: res.data }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Finder onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
