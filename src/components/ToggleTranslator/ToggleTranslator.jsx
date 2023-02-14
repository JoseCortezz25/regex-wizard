import React, { useState } from "react";

const ToggleTranslator = ({ setToggle, toggle }) => {
  return (
    <span
      className="Button__toggle"
      onClick={() => setToggle((prevState) => !prevState)}
    >
      {!toggle ? <p>{"Español → RegEx"}</p> : <p>{"RegEx → Español"}</p>}
    </span>
  );
};

export default ToggleTranslator;
