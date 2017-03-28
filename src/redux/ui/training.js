import { handleActions } from 'redux-actions'

const initialState = {
  trainingId: null,
  lessonId: null,
  code: ''
}

export default handleActions({
  'TEST': () => initialState
}, initialState)
