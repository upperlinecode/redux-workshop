import React, { Component } from "react";
import { CardRoot } from "./Card.styles";
import gifData, { gifType } from "../../data/sample_data";
import { GiphyData } from "../../data/utils";

const Card = (props: {
  isActive: boolean;
  gif: GiphyData;
  onClick: () => void;
}) => {
  return (
    <CardRoot isActive={props.isActive} onClick={props.onClick}>
      <img src={props.gif.images.downsized.url} />
    </CardRoot>
  );
};

Card.id = "Card";

export default Card;
