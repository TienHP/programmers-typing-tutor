/* global fetch */
import delay from 'delay'

import {
  FETCH_LESSON_REQUEST,
  FETCH_LESSON_SUCCESS,
  FETCH_LESSON_ERROR
} from 'constants/lessons'

export function fetchLesson (id) {
  return (dispatch, getState, services) => {
    dispatch({ type: FETCH_LESSON_REQUEST, payload: { id } })
    return fetch(`/api/lessons/${id}.json`)
    .then(delay(1000))
    .then(res => res.json())
    .then(payload => dispatch({ type: FETCH_LESSON_SUCCESS, payload }))
    .catch(error => dispatch({ type: FETCH_LESSON_ERROR, error: true, payload: error.message }))
  }
}
