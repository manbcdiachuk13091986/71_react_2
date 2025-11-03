import React from "react";
import "./Styles.css";

function Input({ name, type = "text", placeholder = "", label }) {
  return (
    <div className="hw-input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
