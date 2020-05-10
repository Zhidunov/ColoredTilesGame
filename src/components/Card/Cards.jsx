import React, { useState } from "react";
import { connect } from "react-redux";
import {
  flipCardAC,
  setFlippedCard,
  removeListener,
  unflipCardAC
} from "../../redux/actions.js";
import Card from "./Card.jsx";

const Cards = (props) => {

  let [lockBoard, setLockBoard] = useState(false);
  let [firstCard, setFirstCard] = useState(null);

  const flipCard = (id) => {
    if (lockBoard) return;
    if (id === firstCard) return;
    props.flipCardAC(id);

    if (!props.hasFlippedCard) {
      props.setFlippedCard(true);
      setFirstCard(id);
    } else {
      checkForMatch(firstCard, id);
    }
    console.log(id);
  };

  function checkForMatch(firstCard, secondCard) {
    if (props.cards[firstCard].type === props.cards[secondCard].type) {
      disableCards(firstCard, secondCard);
    } else {
      unflipCards(firstCard, secondCard);
    }
  }

  const disableCards = (firstCard, secondCard) => {
    props.removeListener(firstCard);
    props.removeListener(secondCard);
    resetBoard();
  };

  const unflipCards = (firstCard, secondCard) => {
    setLockBoard(true);

    setTimeout(() => {
      props.unflipCardAC(firstCard);
      props.unflipCardAC(secondCard);
      resetBoard();
    }, 1500);
  };

  function resetBoard() {
    props.setFlippedCard(false);
    setLockBoard(false);
    setFirstCard(null);
  }

  return props.cards.map((card) => (
    <Card flipCard={flipCard} card={card} key={card.id} />
  ));
};

const mapStateToProps = (state) => {
  return {
    cards: state.game.cards,
    hasFlippedCard: state.game.hasFlippedCard
  };
};

export default connect(mapStateToProps, {
  flipCardAC,
  setFlippedCard,
  removeListener,
  unflipCardAC,
})(Cards);
