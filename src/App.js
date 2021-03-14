import React from "react";
import Gameboard from "./components/Gameboard/GameBoard.jsx";
import styled from "styled-components";

function App() {
  return (
    <RootContainer>
      <Gameboard />
    </RootContainer>
  );
}

export default App;

const RootContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #222;
`;
