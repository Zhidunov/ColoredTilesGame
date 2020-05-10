import {
  MIX_CARDS,
  FLIP_CARD,
  SET_FLIPPED_CARD,
  REMOVE_LISTENER,
  UNFLIP_CARD,
} from "./types";

export const mixCards = () => {
  return {
    type: MIX_CARDS,
  };
};

export const flipCardAC = (id) => {
  return {
    type: FLIP_CARD,
    id
  };
};

export const setFlippedCard = (flippedCardState) => {
  return {
    type: SET_FLIPPED_CARD,
    flippedCardState

  };
};

export const removeListener = (id) => {
  return {
    type: REMOVE_LISTENER,
    id
  };
};

export const unflipCardAC = (id) => {
  return {
    type: UNFLIP_CARD,
    id
  };
};