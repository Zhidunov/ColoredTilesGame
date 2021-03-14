import React from "react";
import styled from 'styled-components'

import menu from "src/assets/img/menu.png"

const Card = ({ card, flipCard }) => {

  return (
    <CardRoot
      order={card.order}
      data-type={card.type}
      onClick={() => card.onListen && flipCard(card.id)}
      flipped={card.flipped}
    >
      <CardImg front src={card.uri} alt="" />
      <CardImg src={menu} alt="Menu" />
    </CardRoot>
  );
};

export default Card;

const CardRoot = styled.div`
    width: 150px;
    height: 150px;
    margin: 5px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.7s;
    ${({flipped}) => flipped && "transform: rotateY(180deg)"};
    ${({order}) => `order: ${order}`};
`

const CardImg = styled.img`
      width: 100%;
      height: 100%;
      padding: 20px;
      position: absolute;
      border-radius: 5px;
      background: rgb(245, 229, 138);
      backface-visibility: hidden;
    ${({front}) => front && "transform: rotateY(180deg)"};
`
