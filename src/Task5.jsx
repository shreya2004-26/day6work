import React from "react";
import "./task5.css";
import Card from "./Card";
import Image1 from "./assests/dark.jpg";
import Image2 from "./assests/money heist.webp";
import Image3 from "./assests/strangerThings.jpg";

const Task5 = () => {
  return (
    <>
      <div className="t5MainContainer">
        <div className="head">
          <h2>LIST OF TOP 5 NETFLIX SERIES IN 2024</h2>
        </div>
        <div className="t5SubContainer">
          <Card
            img={Image1}
            para="Netflix Original Series"
            heading="Dark"
            click="Watch Now"
          />
          <Card
            img={Image2}
            para="Netflix Original Series"
            heading="Money Heist"
            click="Watch Now"
          />
          <Card
            para="Netflix Original Series"
            img={Image3}
            heading="Stranger Things"
            click="Watch Now"
          />
        </div>
      </div>
    </>
  );
};

export default Task5;
