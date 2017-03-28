import pluck from 'ramda/src/pluck'

import {
  // COMPLETE_LESSON,
  // COMPLETE_TRAINING,
  FETCH_TRAINIG,
  FETCH_TRAINIG_FAILED,
  FETCH_TRAINIG_SUCCESS,
  // INCREMENT_MISTAKES,
  // SET_CURRENT_LESSON,
  // SET_CURRENT_TRAINIG,
  SET_ENTITIES
  // START_LESSON,
  // START_TRAINING,
  // UPDATE_EDITOR_CODE
} from 'constants'

export function fetchTraining (slug) {
  return (dispatch, getState, services) => {
    dispatch({ type: FETCH_TRAINIG, payload: { slug } })

    services.training.fetch(slug)
    .then(training => {
      dispatch({ type: SET_ENTITIES, payload: getTrainingEntities(training) })
      dispatch({ type: FETCH_TRAINIG_SUCCESS, payload: training })
    })
    .catch(error => {
      console.error(error)
      dispatch({ type: FETCH_TRAINIG_FAILED, error: true, payload: error.message })
    })
  }
}

function getTrainingEntities (training) {
  const {
    id,
    slug,
    name,
    mode,
    lessons
  } = training

  return {
    trainings: {
      byId: {
        [id]: {
          id,
          slug,
          name,
          mode,
          lessons: pluck('id', lessons)
        }
      },
      bySlug: {
        [slug]: id
      }
    },
    lessons: {
      byId: lessons.reduce((lessons, lesson) => {
        lessons[lesson.id] = {
          ...lesson,
          trainingId: id
        }
        return lessons
      }, {})
    }
  }
}
