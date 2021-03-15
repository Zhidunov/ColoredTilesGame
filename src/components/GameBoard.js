import React, { useEffect } from "react"
import { connect } from "react-redux"
import { mixCards, flipCard } from "src/redux/actions"
import Card from "src/components/Card"
import styled from "styled-components"

const GameBoard = ({ mixCards, cards, flipCard }) => {
  useEffect(() => {
    mixCards()
  }, [mixCards])

  return (
    <Root>
      {cards.map((card, index) => (
        <Card flipCard={flipCard} card={card} key={index} />
      ))}
    </Root>
  )
}

const mapStateToProps = (state) => ({
  cards: state.cards,
})

export default connect(mapStateToProps, { mixCards, flipCard })(GameBoard)

const Root = styled.div`
  width: 100vh;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  border: 1px solid red;
`
