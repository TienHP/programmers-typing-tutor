import { fetchJson } from '../utils'
import {
  TRAININGS
} from '../constants'
import { pluck } from 'ramda'

export const training = {
  fetch (trainingId) {
    if (pluck('id', TRAININGS).indexOf(trainingId) === -1) {
      throw new Error('Unknown training Id: ' + trainingId)
    }

    return fetchJson(`training/${trainingId}.json`).then(training => {
      training.id = trainingId
      return training
    })
  }
}
