import { createAction } from 'redux-actions'

export const getCardsRequest = createAction('GET_CARDS_REQUEST')
export const getCardsSuccess = createAction('GET_CARDS_SUCCESS')
export const getCardsFail = createAction('GET_CARDS_FAIL')
