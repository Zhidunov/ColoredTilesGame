import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { gameReducer } from "src/redux/gameReducer"

export const store = createStore(gameReducer, applyMiddleware(thunk))
