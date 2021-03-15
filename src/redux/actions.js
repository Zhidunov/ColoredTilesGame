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

export const resetGame = () => async (dispatch) => {
  dispatch({
    type: RESET_GAME,
  })
  setTimeout(() => dispatch(mixCards()), 1000)
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
