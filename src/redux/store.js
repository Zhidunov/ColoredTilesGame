import {combineReducers, createStore} from 'redux'
import {gameReducer} from './gameRuducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

let reducers = combineReducers({
    game: gameReducer
})

export const store = createStore(reducers, composeEnhancers);
