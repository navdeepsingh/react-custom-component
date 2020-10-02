/**
 * Reducers
 */
import { combineReducers } from 'redux'
import { CHANGE_THEME } from '../actions'

/**
 * Set start state
 */
const initialState = {
  theme: 'dark'
}

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'bright' : 'dark'
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  themeReducer
})

export default rootReducer

