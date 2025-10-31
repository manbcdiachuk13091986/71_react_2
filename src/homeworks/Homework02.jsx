import React from "react";
import ProfileCard from "../components/ProfileCard";

const Homework02 = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      <ProfileCard
        avatar="https://i.pravatar.cc/150?img=3"
        name="Пётр Дячук"
        job="Веб-разработчик"
        hobby="Путешествия"
      />
      <ProfileCard
        avatar="https://i.pravatar.cc/150?img=5"
        name="Мария Смирнова"
        job="Дизайнер UI/UX"
        hobby="Фотография"
      />
      <ProfileCard
        avatar="https://i.pravatar.cc/150?img=8"
        name="Дмитрий Кузнецов"
        job="Инженер-программист"
        hobby="Горные походы"
      />
    </div>
  );
};

export default Homework02;
