import React from "react";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar fixed-top">
      <h4 className="nav-name">[Adult Swim]</h4>

      <ul className="nav-link animate__animated  animate__backInDown infinite animate__slow 2s ">
        <li>
          <a href="#hm">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#characters-section">characters</a>
        </li>
        <li>
          <a href="#news">news</a>
        </li>
        <li>
          <a href="#galery">galery</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
