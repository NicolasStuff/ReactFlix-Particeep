import React from "react";
import TitleFilter from "./TitleFilter";
import logo from '../img/LOGO.png'

const MovieHeader = ({ onKeyUpFn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a href="/">
        <img src={logo} alt='ReactFlix' className="logoImg"></img>
        </a>
          <TitleFilter onKeyUpFn={onKeyUpFn} />
      </div>
    </nav>
  );
};

export default MovieHeader;
