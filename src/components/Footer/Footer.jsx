import React from "react";
import githubIcon from "../../assets/static/icons/Github-fill-dark.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">RegEx Wizard</h1>
        <div className="footer__social">
          <a
            href="https://github.com/JoseCortezz25"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="" />
          </a>
        </div>
        <div className="footer__copy">Todos los ambidiestros reservados. ☕ </div>
      </div>
    </footer>
  );
};

export { Footer };
