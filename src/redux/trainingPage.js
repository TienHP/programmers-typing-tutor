import {
  START_TRAINING,
  COMPLETE_LESSON,
  COMPLETE_TRAINING
} from '../constants'

const initialState = {
  currentLesson: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_TRAINING:
      // return { ...state, currentLesson: action.payload.lessonId}
    default:
      return state
  }
}
