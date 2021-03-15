import React from "react"
import { connect } from "react-redux"
import { resetGame } from "src/redux/actions"

import Gameboard from "./components/Gameboard/GameBoard"
import styled from "styled-components"

const App = ({ resetGame }) => {
  return (
    <RootContainer>
      <Gameboard />
      <ResetButtons
        onClick={() => {
          resetGame()
        }}
      >
        Reset
      </ResetButtons>
    </RootContainer>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {
  resetGame,
})(App)

const RootContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #222;
`

const ResetButtons = styled.button`
  position: absolute;
`
