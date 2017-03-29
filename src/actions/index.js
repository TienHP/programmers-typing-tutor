/* global fetch */
import delay from 'delay'
import { createActions } from 'redux-actions'

export default createActions({
  FETCH: {
    TRAININGS: () => fetch('/api/trainings.json').then(delay(1000)).then(res => res.json()),
    TRAINING: (id) => fetch(`/api/trainings/${id}.json`).then(delay(1000)).then(res => res.json()),

    LESSON: (id) => fetch(`/api/lessons/${id}.json`).then(delay(1000)).then(res => res.json())
  }
})
