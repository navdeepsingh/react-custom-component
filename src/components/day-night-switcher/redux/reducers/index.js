/**
 * Reducers
 */
import { combineReducers } from 'redux'
import * as actions from '../actions'

/**
 * Set start state
 */
const initialState = {
  theme: 'dark'
}

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_THEME:
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

