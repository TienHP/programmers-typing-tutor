import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  COMPLETE_LESSON,
  UPDATE_EDITOR_CODE,
  INCREMENT_MISTAKES,
  SET_ENTITIES,
  START_LESSON
} from 'constants'

export default combineReducers({
  byId: handleActions({
    [COMPLETE_LESSON]: completeLesson,
    [INCREMENT_MISTAKES]: incrementMistakes,
    [UPDATE_EDITOR_CODE]: updateEditorCode,
    [START_LESSON]: startLesson,
    [SET_ENTITIES]: setEntitiesById
  }, {}),
  bySlug: handleActions({
    [SET_ENTITIES]: setEntitiesBySlug
  }, {})
})

function completeLesson (state, action) {
  const lesson = state[action.payload.lessonId]
  return {
    ...state,
    [action.payload.lessonId]: {
      ...lesson,
      elapsedTime: Date.now() - lesson.statedAt,
      finishedAt: Date.now()
    }
  }
}

function incrementMistakes (state, action) {
  return {
    ...state,
    [action.payload.lessonId]: {
      ...state[action.payload.lessonId],
      mistakes: state[action.payload.lessonId].mistakes + 1
    }
  }
}

function updateEditorCode (state, action) {
  const lesson = state[action.payload.lessonId]
  return {
    ...state,
    [action.payload.lessonId]: {
      ...lesson,
      editor: action.payload.code,
      keystrokes: lesson.keystrokes + 1
    }
  }
}

function startLesson (state, action) {
  const lesson = state[action.payload.lessonId]
  return {
    ...state,
    [action.payload.lessonId]: {
      ...lesson,
      statedAt: Date.now()
    }
  }
}

function setEntitiesById (state, action) {
  if (action.payload.lessons) {
    return {
      ...state,
      ...action.payload.lessons.byId
    }
  }
  return state
}

function setEntitiesBySlug (state, action) {
  if (action.payload.lessons) {
    return {
      ...state,
      ...action.payload.lessons.bySlug
    }
  }
  return state
}
