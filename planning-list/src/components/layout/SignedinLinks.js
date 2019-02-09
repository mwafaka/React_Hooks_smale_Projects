import React from "react";
import { NavLink } from "react-router-dom";

const SignedINLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating success lighten-1">
          Mf
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedINLinks;
