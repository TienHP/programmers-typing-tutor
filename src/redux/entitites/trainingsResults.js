import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  // COMPLETE_LESSON,
  // SET_ENTITIES
} from 'constants'

export default combineReducers({
  byId: handleActions({
    'TEST': () => ({})
  }, {})
})
