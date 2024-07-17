import React from "react";
import Logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";

function Header() {
  return (
    <header className="App-header">
      <img src={Logo} alt="Logo" className="App-logo" />
      <img src={menu} alt="Menu Icon" className="App-menu" />
      <div className="App-header-text">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
    </header>
  );
}

export default Header;
