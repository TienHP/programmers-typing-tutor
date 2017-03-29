/* global fetch */
import delay from 'delay'
import { createActions } from 'redux-actions'

export default createActions({
  FETCH: {
    TRAININGS: () => fetch('/api/trainings.json').then(delay(1000)).then(res => res.json()),
    TRAINING: (slug) => fetch(`/api/trainings/${slug}.json`).then(delay(1000)).then(res => res.json())
  }
})
