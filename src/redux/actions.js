import {
  MIX_CARDS,
  FLIP_CARD,
  SET_FLIPPED_CARD,
  REMOVE_LISTENER,
  UNFLIP_CARD,
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
