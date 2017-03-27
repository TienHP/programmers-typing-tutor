import { pluck } from 'ramda'
import { fetchJson } from 'utilities'
import {
  TRAININGS
} from 'constants'

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
