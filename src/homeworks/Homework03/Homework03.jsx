import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Styles.css";

function Homework03() {
  return (
    <div className="hw03-container">
      <Input
        name="username"
        type="text"
        placeholder="Введите имя"
        label="Имя пользователя"
      />
      <Input
        name="email"
        type="email"
        placeholder="you@example.com"
        label="E-mail"
      />
      <Button text="Отправить" onClick={() => alert("Форма отправлена")} />
    </div>
  );
}

export default Homework03;
