import { handleActions } from 'redux-actions'

import * as actions from './../actions'

const defaultState = {
  time: '',
  frequency: '',
  currentNotificationId: ''
}

export default handleActions(
  {
    [actions.SET_TIME]: (state, paylaod) => ({
      ...state,
      time: paylaod
    }),
    [actions.SET_FREQUENCY]: (state, paylaod) => ({
      ...state,
      frequency: paylaod
    }),
    [actions.SET_NOTIFICATION_ID]: (state, paylaod) => ({
      ...state,
      currentNotificationId: paylaod
    })
  },
  defaultState
)
