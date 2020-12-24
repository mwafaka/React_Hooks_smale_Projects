import React from "react";
import "font-awesome/css/font-awesome.css";

const Header = props => {
  return (
    <div className="header">
      <i onClick={props.goBack} class="far fa-chevron-left" />
      <h3>STATIONS</h3>
      <i className="fas fa-power-off " />
    </div>
  );
};
export default Header;
