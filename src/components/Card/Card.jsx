import React from "react";
import menu from "./img/menu.png";
import beer from "./img/beer.png";
import burger from "./img/burger.png";
import coffee from "./img/coffee.png";
import hotdog from "./img/hotdog.png";
import meat from "./img/meat.png";
import noodles from "./img/noodles.png";
import pizza from "./img/pizza.png";
import snack from "./img/snack.png";

const Card = ({ card, flipCard }) => {

  let front;
  switch(card.type){
    case 'beer': front = beer; break;
    case 'burger': front = burger; break;
    case 'coffee': front = coffee; break;
    case 'hotdog': front = hotdog; break;
    case 'meat': front = meat; break;
    case 'noodles': front = noodles; break;
    case 'pizza': front = pizza; break;
    case 'snack': front = snack; break;
    default: front = menu;
  }

  return (
    <div
      className={card.flipped ? "card flip" : "card"}
      style={{ order: `${card.order}` }}
      data-type={card.type}
      onClick={() => {card.onListen && flipCard(card.id)}}
    >
      <img className="front" src={front} alt="" />
      <img className="back" src={menu} alt="Menu" />
    </div>
  );
};

export default Card;
