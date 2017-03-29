import { handleActions } from 'redux-actions'
import {
  CHANGE_EDITOR_CODE
} from 'constants'

const initialState = {
  trainingId: null,
  lessonId: null,
  code: ''
}

export default handleActions({
  [CHANGE_EDITOR_CODE]: (state, action) => ({
    ...state,
    code: action.payload.code
  })
}, initialState)
