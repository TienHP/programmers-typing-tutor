import { pluck } from 'ramda'
import { fetchJson } from 'utilities'
import { TRAININGS } from 'constants'

export const training = {
  fetch (trainingId) {
    if (pluck('id', TRAININGS).indexOf(trainingId) === -1) {
      throw new Error('Unknown training Id: ' + trainingId)
    }

    return new Promise(resolve => {
      setTimeout(() => resolve(fetchJson(`/training/${trainingId}.json`)), 1000)
    })
  }
}
