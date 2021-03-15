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
import beer from "src/assets/img/beer.png"
import burger from "src/assets/img/burger.png"
import coffee from "src/assets/img/coffee.png"
import hotdog from "src/assets/img/hotdog.png"
import meat from "src/assets/img/meat.png"
import noodles from "src/assets/img/noodles.png"
import pizza from "src/assets/img/pizza.png"
import snack from "src/assets/img/snack.png"

const initialState = {
  cards: [
    {
      id: 0,
      type: "beer",
      flipped: false,
      order: "",
      onListen: true,
      uri: beer,
    },
    {
      id: 1,
      type: "beer",
      flipped: false,
      order: "",
      onListen: true,
      uri: beer,
    },
    {
      id: 2,
      type: "burger",
      flipped: false,
      order: "",
      onListen: true,
      uri: burger,
    },
    {
      id: 3,
      type: "burger",
      flipped: false,
      order: "",
      onListen: true,
      uri: burger,
    },
    {
      id: 4,
      type: "coffee",
      flipped: false,
      order: "",
      onListen: true,
      uri: coffee,
    },
    {
      id: 5,
      type: "coffee",
      flipped: false,
      order: "",
      onListen: true,
      uri: coffee,
    },
    {
      id: 6,
      type: "hotdog",
      flipped: false,
      order: "",
      onListen: true,
      uri: hotdog,
    },
    {
      id: 7,
      type: "hotdog",
      flipped: false,
      order: "",
      onListen: true,
      uri: hotdog,
    },
    {
      id: 8,
      type: "meat",
      flipped: false,
      order: "",
      onListen: true,
      uri: meat,
    },
    {
      id: 9,
      type: "meat",
      flipped: false,
      order: "",
      onListen: true,
      uri: meat,
    },
    {
      id: 10,
      type: "noodles",
      flipped: false,
      order: "",
      onListen: true,
      uri: noodles,
    },
    {
      id: 11,
      type: "noodles",
      flipped: false,
      order: "",
      onListen: true,
      uri: noodles,
    },
    {
      id: 12,
      type: "pizza",
      flipped: false,
      order: "",
      onListen: true,
      uri: pizza,
    },
    {
      id: 13,
      type: "pizza",
      flipped: false,
      order: "",
      onListen: true,
      uri: pizza,
    },
    {
      id: 14,
      type: "snack",
      flipped: false,
      order: "",
      onListen: true,
      uri: snack,
    },
    {
      id: 15,
      type: "snack",
      flipped: false,
      order: "",
      onListen: true,
      uri: snack,
    },
  ],
  hasFlippedCard: false,
  lockBoard: false,
  firstCard: null,
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MIX_CARDS: {
      const cardsWithRandomPos = state.cards.map((card) => {
        return {
          ...card,
          order: Math.floor(Math.random() * 16),
        }
      })
      return { ...state, cards: cardsWithRandomPos }
    }

    case FLIP_CARD: {
      const cards = state.cards.map((card) => {
        if (card.id === action.id) {
          return { ...card, flipped: true }
        }
        return card
      })
      return { ...state, cards }
    }

    case UNFLIP_CARD: {
      const cards = state.cards.map((card) => {
        if (card.id === action.id) {
          return { ...card, flipped: false }
        }
        return card
      })
      return { ...state, cards }
    }

    case SET_FLIPPED_CARD: {
      return { ...state, hasFlippedCard: action.hasFlippedCard }
    }

    case REMOVE_LISTENER: {
      const cards = state.cards.map((card) => {
        if (card.id === action.id) {
          return { ...card, onListen: false }
        }
        return card
      })
      return { ...state, cards }
    }

    case RESET_BOARD: {
      return {
        ...state,
        hasFlippedCard: false,
        lockBoard: false,
        firstCard: null,
      }
    }
    case RESET_GAME: {
      const cardsWithRandomPos = state.cards.map((card) => {
        return {
          ...card,
          flipped: false,
          onListen: true,
          order: Math.floor(Math.random() * 16),
        }
      })
      return { ...initialState, cards: cardsWithRandomPos }
    }

    case SET_LOCK_BOARD: {
      return { ...state, lockBoard: action.lockBoardState }
    }

    case SET_FIRST_CARD: {
      return { ...state, firstCard: action.id }
    }

    default:
      return state
  }
}
