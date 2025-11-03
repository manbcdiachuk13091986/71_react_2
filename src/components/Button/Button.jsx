import React from "react";
import "./Styles.css";
function Button({ text, onClick, type = "button" }) {
  return (
    <button className="hw-button" type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
