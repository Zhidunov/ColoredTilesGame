import { combineReducers, createStore } from "redux"
import { gameReducer } from "src/redux/gameReducer"

let reducers = combineReducers({
  game: gameReducer,
})

export const store = createStore(reducers)
