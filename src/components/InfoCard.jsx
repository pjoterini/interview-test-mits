import React from "react";

const InfoCard = ({ imgSrc, value, text }) => {
  return (
    <div className="info-card swing-in-top-fwd">
      <img src={imgSrc} alt="icon" />
      <div
        style={{
          color: "#fff",
          marginBottom: ".3rem",
          marginTop: "1rem",
          fontSize: "1.2rem",
        }}
      >
        {value}
      </div>
      <p
        style={{
          color: "#fff",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default InfoCard;
