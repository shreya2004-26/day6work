import React from "react";
import Image1 from "./assests/dark.jpg";
const Card = ({ img, para, heading, click }) => {
  return (
    <>
      <div className="cardContainer">
        <img src={img} alt="no img" />
        <div className="insideCardContainer">
          <p>{para}</p>
          <h3>{heading}</h3>
          <button>{click}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
