import React, { useState } from "react";
// import Image from "next/image";
import menuIcon from "../../../public/static/icons/menu.svg";
import closeIcon from "../../../public/static/icons/close.svg";
import "./Header.css";

const Header = () => {
  const [toggle, showMenu] = useState(false);

  // console.log("toggle", toggle);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          RegEx Wizard
        </a>

        {/* <div className={toggle ? "nav__menu show_menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active_link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Acerca de mi
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                Proyectos Personales
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contacto
              </a>
            </li>
          </ul>

          <i
            className="nav__close"
            onClick={() => showMenu((prevState) => !prevState)}
          >
            <img src={closeIcon} alt="" />
          </i>
        </div> */}

        <div
          className="nav__toggle"
          onClick={() => showMenu((prevState) => !prevState)}
        >
          <img src={menuIcon} alt="" />
        </div>
      </nav>
    </header>
  );
};

export { Header };
