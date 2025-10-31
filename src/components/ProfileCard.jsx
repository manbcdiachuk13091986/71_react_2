import React from "react";

const ProfileCard = ({ avatar, name, job, hobby }) => {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h2 style={{ margin: "8px 0" }}>{name}</h2>
      <p style={{ fontStyle: "italic", color: "#555" }}>{job}</p>
      <p>Хобби: {hobby}</p>
    </div>
  );
};

export default ProfileCard;
