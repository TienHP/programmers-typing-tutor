import { append } from 'ramda'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  COMPLETE_LESSON,
  SET_ENTITIES
} from 'constants'

export default combineReducers({
  byId: handleActions({
    [COMPLETE_LESSON]: completeLesson,
    [SET_ENTITIES]: setEntitiesById
  }, {}),
  bySlug: handleActions({
    [SET_ENTITIES]: setEntitiesBySlug
  }, {})
})

function completeLesson (state, action) {
  const training = state[action.payload.trainingId]
  return {
    ...state,
    [action.payload.trainingId]: {
      ...training,
      lessonsCompleted: append(action.payload.lessonId, training.lessonsCompleted)
    }
  }
}

function setEntitiesById (state, action) {
  if (action.payload.trainings) {
    return {
      ...state,
      ...action.payload.trainings.byId
    }
  }
  return state
}

function setEntitiesBySlug (state, action) {
  if (action.payload.trainings) {
    return {
      ...state,
      ...action.payload.trainings.bySlug
    }
  }
  return state
}
