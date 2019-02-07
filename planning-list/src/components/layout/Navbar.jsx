import React from "react";
import { Link } from "react-router-dom";
import SignedINLinks from "./SignedinLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Planning-list
        </Link>
        <SignedINLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};
export default Navbar;
