import {
  MIX_CARDS,
  FLIP_CARD,
  SET_FLIPPED_CARD,
  REMOVE_LISTENER,
  UNFLIP_CARD,
} from "./types";

const initialState = {
  cards: [
    {
      id: 0,
      type: 'beer',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 1,
      type: 'beer',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 2,
      type: 'burger',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 3,
      type: 'burger',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 4,
      type: 'coffee',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 5,
      type: 'coffee',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 6,
      type: 'hotdog',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 7,
      type: 'hotdog',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 8,
      type: 'meat',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 9,
      type: 'meat',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 10,
      type: 'noodles',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 11,
      type: 'noodles',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 12,
      type: 'pizza',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 13,
      type: 'pizza',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 14,
      type: 'snack',
      flipped: false,
      order: "",
      onListen: true,
    },
    {
      id: 15,
      type: 'snack',
      flipped: false,
      order: "",
      onListen: true,
    },
  ],
  hasFlippedCard: false
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MIX_CARDS: {
      let cards = state.cards;
      cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 16);
        card.order = randomPos;
      });
      return { ...state, cards };
    }

    case FLIP_CARD: {
      let cards = state.cards;
      cards[action.id].flipped = true;
      return { ...state, cards };
    }

    case UNFLIP_CARD: {
        let cards = state.cards;
        cards[action.id].flipped = false;
        return { ...state, cards };
      }

    case SET_FLIPPED_CARD: {
      return { ...state, hasFlippedCard: action.flippedCardState };
    }

    case REMOVE_LISTENER: {
        let cards = state.cards;
        cards[action.id].onListen = false;
        return { ...state, cards };
    }
    
    default:
      return state;
  }
};