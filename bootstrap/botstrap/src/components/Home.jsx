import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
export class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Codelife.io</h2>
          <p>This is how to build a website with React ,...</p>
        </Jumbotron>
        <Link to="/about" />
        <Button bsStyle="primary">About</Button>
      </Grid>
    );
  }
}

export default Home;