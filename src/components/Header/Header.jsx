import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          <img src="/wizard.png" alt="A stunning logo" />
          <p>RegEx Wizard</p>
        </a>
      </nav>
    </header>
  );
};

export { Header };
