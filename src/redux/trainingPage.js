import {
  SET_CURRENT_LESSON,
  SET_CURRENT_TRAINIG
} from '../constants'

const initialState = {
  currentTraining: null,
  currentLesson: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LESSON:
      return {
        ...state,
        currentLesson: action.payload.lessonId
      }
    case SET_CURRENT_TRAINIG:
      return {
        ...state,
        currentTraining: action.payload.trainingId
      }
    default:
      return state
  }
}
