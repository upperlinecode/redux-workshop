import React, { Component } from "react";
import { CardRoot } from "./Card.styles";
import gifData, { gifType } from "../../data/sample_data";

const Card = (props: { gif: gifType }) => {
  return (
    <CardRoot>
      <img src={props.gif.images.downsized.url}/>
    </CardRoot>
  );
};

Card.id = "Card";

export default Card;
