import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { gameReducer } from "src/redux/gameReducer"

let reducers = combineReducers({
  game: gameReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))
