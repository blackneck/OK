import { handleActions } from 'redux-actions'
import * as actions from './../actions'

const defaultState = {
  cards: [],
  current: 0
}

export default handleActions(
  {
    [actions.getCardsSuccess]: (state, payload) => ({
      ...state,
      cards: [...state.cards, ...payload]
    })
  },
  defaultState
)
