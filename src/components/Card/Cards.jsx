import React, { useState } from "react"
import { connect } from "react-redux"
import {
  flipCardAC,
  setFlippedCard,
  removeListener,
  unflipCardAC
} from "src/redux/actions"
import Card from "src/components/Card/Card"

const Cards = ({flipCardAC, hasFlippedCard, setFlippedCard, cards, removeListener, unflipCardAC, }) => {

  let [lockBoard, setLockBoard] = useState(false)
  let [firstCard, setFirstCard] = useState(null)

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

  const resetBoard = () => {
    setFlippedCard(false)
    setLockBoard(false)
    setFirstCard(null)
  }

  return cards.map((card) => (
    <Card flipCard={flipCard} card={card} key={card.id} />
  ))
}

const mapStateToProps = (state) => ({
    cards: state.game.cards,
    hasFlippedCard: state.game.hasFlippedCard
  })

export default connect(mapStateToProps, {
  flipCardAC,
  setFlippedCard,
  removeListener,
  unflipCardAC,
})(Cards)
