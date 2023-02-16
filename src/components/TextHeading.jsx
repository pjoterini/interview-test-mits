import React from "react";

const TextHeading = ({ shortText, heading, mainText }) => {
  return (
    <div className="textHeading-container">
      <p className="short-desc">{shortText}</p>
      <h2>{heading}</h2>
      <p>{mainText}</p>
    </div>
  );
};

export default TextHeading;
