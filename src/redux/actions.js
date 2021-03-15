import {
  MIX_CARDS,
  FLIP_CARD,
  SET_FLIPPED_CARD,
  REMOVE_LISTENER,
  UNFLIP_CARD,
  RESET_BOARD,
  SET_LOCK_BOARD,
  SET_FIRST_CARD,
  RESET_GAME,
  SET_RESET_LOADING,
  SET_MATCHED_PAIRS,
} from "src/redux/types"

export const mixCards = () => {
  return {
    type: MIX_CARDS,
  }
}

export const flipCardAC = (id) => {
  return {
    type: FLIP_CARD,
    id,
  }
}

export const setFlippedCard = (hasFlippedCard) => {
  return {
    type: SET_FLIPPED_CARD,
    hasFlippedCard,
  }
}

export const setMatchedPairs = (matchedPairs) => {
  return {
    type: SET_MATCHED_PAIRS,
    matchedPairs,
  }
}

export const removeListener = (id) => {
  return {
    type: REMOVE_LISTENER,
    id,
  }
}

export const unflipCardAC = (id) => {
  return {
    type: UNFLIP_CARD,
    id,
  }
}

export const resetBoard = () => {
  return {
    type: RESET_BOARD,
  }
}

export const setResetLoading = (gameIsResetting) => {
  return {
    type: SET_RESET_LOADING,
    gameIsResetting,
  }
}

export const resetGame = () => (dispatch) => {
  dispatch({
    type: RESET_GAME,
  })
  setTimeout(() => {
    dispatch(mixCards())
    dispatch(setLockBoard(false))
    dispatch(setResetLoading(false))
    dispatch(setMatchedPairs(0))
  }, 700)
}

export const disableCards = (firstCard, secondCard) => (dispatch, getState) => {
  dispatch(setMatchedPairs(getState().matchedPairs + 1))
  dispatch(removeListener(firstCard))
  dispatch(removeListener(secondCard))
  dispatch(resetBoard())
}

export const unflipCards = (firstCard, secondCard) => (dispatch) => {
  dispatch(setLockBoard(true))
  setTimeout(() => {
    dispatch(unflipCardAC(firstCard))
    dispatch(unflipCardAC(secondCard))
    dispatch(resetBoard())
  }, 1000)
}

export const flipCard = (id) => (dispatch, getState) => {
  const currentState = getState()
  if (currentState.lockBoard) return
  if (id === currentState.firstCard) return
  dispatch(flipCardAC(id))

  if (!currentState.hasFlippedCard) {
    dispatch(setFlippedCard(true))
    dispatch(setFirstCard(id))
  } else {
    dispatch(checkForMatch(currentState.firstCard, id))
  }
}

export const checkForMatch = (firstCard, secondCard) => (
  dispatch,
  getState
) => {
  const currentState = getState()
  if (currentState.firstCard === null) return
  if (
    currentState.cards[firstCard].type === currentState.cards[secondCard].type
  ) {
    dispatch(disableCards(firstCard, secondCard))
  } else {
    dispatch(unflipCards(firstCard, secondCard))
  }
}

export const setLockBoard = (lockBoardState) => {
  return {
    type: SET_LOCK_BOARD,
    lockBoardState,
  }
}

export const setFirstCard = (id) => {
  return {
    type: SET_FIRST_CARD,
    id,
  }
}
