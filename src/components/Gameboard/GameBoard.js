import React, { useEffect } from "react"
import { connect } from "react-redux"
import { mixCards } from "src/redux/actions"
import Cards from "src/components/Card/Cards"
import styled from "styled-components"

const GameBoard = ({ mixCards }) => {
  useEffect(() => {
    mixCards()
  }, [mixCards])

  return (
    <Root>
      <Cards />
    </Root>
  )
}

export default connect(null, { mixCards })(GameBoard)

const Root = styled.div`
  width: 100vh;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
`
