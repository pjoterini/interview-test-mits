import React from "react";

const ActionCard = ({
  imgSrc,
  heading,
  text,
  color,
  handleClick,
  state,
  setState,
  setOtherStatesFalse,
}) => {
  return (
    <div
      onClick={() => handleClick(state, setState, setOtherStatesFalse)}
      className="action-card-container"
    >
      <div className="upper-section">
        <div className={color + " icon-border"}>
          <img src={imgSrc} alt="icon" />
        </div>
        <h3 className={color}>{heading}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ActionCard;
