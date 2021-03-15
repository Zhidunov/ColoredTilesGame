import React from "react"
import { connect } from "react-redux"
import { resetGame } from "src/redux/actions"

import Gameboard from "./components/GameBoard"
import styled from "styled-components"

const App = ({ resetGame }) => {
  return (
    <RootContainer>
      <div>
        <Gameboard />
      </div>
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

export default connect(null, {
  resetGame,
})(App)

const RootContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #222;
  justify-content: center;
  align-items: center;
`

const ResetButtons = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 8px;
`
