import React from "react"
import { connect } from "react-redux"
import {
  flipCardAC,
  setFlippedCard,
  removeListener,
  unflipCardAC,
  resetBoard,
  setLockBoard,
  setFirstCard,
} from "src/redux/actions"
import Card from "src/components/Card/Card"

const Cards = ({
  flipCardAC,
  hasFlippedCard,
  setFlippedCard,
  cards,
  removeListener,
  unflipCardAC,
  resetBoard,
  setLockBoard,
  setFirstCard,
  lockBoard,
  firstCard,
}) => {
  const flipCard = (id) => {
    if (lockBoard) return
    if (id === firstCard) return
    flipCardAC(id)

    if (!hasFlippedCard) {
      setFlippedCard(true)
      setFirstCard(id)
    } else {
      checkForMatch(firstCard, id)
    }
  }

  const checkForMatch = (firstCard, secondCard) => {
    if (firstCard === null) return
    if (cards[firstCard].type === cards[secondCard].type) {
      disableCards(firstCard, secondCard)
    } else {
      unflipCards(firstCard, secondCard)
    }
  }

  const disableCards = (firstCard, secondCard) => {
    removeListener(firstCard)
    removeListener(secondCard)
    resetBoard()
  }

  const unflipCards = (firstCard, secondCard) => {
    setLockBoard(true)

    setTimeout(() => {
      unflipCardAC(firstCard)
      unflipCardAC(secondCard)
      resetBoard()
    }, 1000)
  }

  return cards.map((card, index) => (
    <Card flipCard={flipCard} card={card} key={index} />
  ))
}

const mapStateToProps = (state) => ({
  cards: state.game.cards,
  hasFlippedCard: state.game.hasFlippedCard,
  firstCard: state.game.firstCard,
  lockBoard: state.game.lockBoard,
})

export default connect(mapStateToProps, {
  flipCardAC,
  setFlippedCard,
  removeListener,
  unflipCardAC,
  resetBoard,
  setLockBoard,
  setFirstCard,
})(Cards)
