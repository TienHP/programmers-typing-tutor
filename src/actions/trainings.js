/* global fetch */
import delay from 'delay'
import {
  FETCH_TRAINIG_REQUEST,
  FETCH_TRAINIG_SUCCESS,
  FETCH_TRAINIG_ERROR,

  FETCH_TRAINIGS_REQUEST,
  FETCH_TRAINIGS_SUCCESS,
  FETCH_TRAINIGS_ERROR
} from 'constants/trainings'

export function fetchTrainings () {
  return (dispatch, getState, services) => {
    dispatch({ type: FETCH_TRAINIGS_REQUEST })
    return fetch('/api/trainings.json')
    .then(delay(1000))
    .then(res => res.json())
    .then(payload => dispatch({ type: FETCH_TRAINIGS_SUCCESS, payload }))
    .catch(error => dispatch({ type: FETCH_TRAINIGS_ERROR, error: true, payload: error.message }))
  }
}

export function fetchTraining (id) {
  return (dispatch, getState, services) => {
    dispatch({ type: FETCH_TRAINIG_REQUEST, payload: { id } })
    return fetch(`/api/trainings/${id}.json`)
    .then(delay(1000))
    .then(res => res.json())
    .then(payload => dispatch({ type: FETCH_TRAINIG_SUCCESS, payload }))
    .catch(error => dispatch({ type: FETCH_TRAINIG_ERROR, error: true, payload: error.message }))
  }
}
