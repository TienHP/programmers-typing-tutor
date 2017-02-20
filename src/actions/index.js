import pluck from 'ramda/src/pluck'

import {
  COMPLETE_LESSON,
  COMPLETE_TRAINING,
  CREATE_TRAINING,
  CREATE_TRAINING_FAILED,
  CREATE_TRAINING_SUCCESS,
  FETCH_TRAINIG,
  FETCH_TRAINIG_FAILED,
  FETCH_TRAINIG_SUCCESS,
  INCREMENT_MISTAKES,
  SET_ENTITIES,
  START_LESSON,
  START_TRAINING,
  UPDATE_EDITOR_CODE,
  UPDATE_TRAINING_FORM
} from '../constants'

import {
  trackEvent
  // setPage,
  // trackPageView
} from '../utils'

export function updateEditorCode (lessonId, code) {
  return (dispatch, getState, services) => {
    const { statedAt, example, trainingId } = getState().entitites.lessons.byId[lessonId]
    const training = getState().entitites.trainings.byId[trainingId]

    if (!statedAt && training.lessonsCompleted.length === 0) {
      dispatch({ type: START_TRAINING, payload: { trainingId } })
      trackEvent({ eventCategory: `Training`, eventAction: 'Start training', eventLabel: trainingId })
    }

    if (!statedAt) {
      dispatch({ type: START_LESSON, payload: { lessonId, trainingId } })
      trackEvent({ eventCategory: `Lesson`, eventAction: 'Start lesson', eventLabel: lessonId })
    }

    dispatch({ type: UPDATE_EDITOR_CODE, payload: { lessonId, code } })

    if (!example.startsWith(code)) {
      dispatch({ type: INCREMENT_MISTAKES, payload: { lessonId } })
    }

    if (example === code) {
      dispatch({ type: COMPLETE_LESSON, payload: { lessonId, trainingId } })
      trackEvent({ eventCategory: `Lesson`, eventAction: 'Complete lesson', eventLabel: lessonId })

      if (training.lessons.length - 1 === training.lessonsCompleted.length) {
        dispatch({ type: COMPLETE_TRAINING, payload: { lessonId, trainingId } })
        trackEvent({ eventCategory: `Training`, eventAction: 'Complete training', eventLabel: trainingId })
      }
    }
  }
}

export function fetchTraining (trainingId) {
  return (dispatch, getState, services) => {
    dispatch({ type: FETCH_TRAINIG, payload: { trainingId } })
    trackEvent({ eventCategory: `Training`, eventAction: 'Fetch training', eventLabel: trainingId })

    services.training.fetch(trainingId).then(
      training => {
        dispatch({ type: SET_ENTITIES, payload: getTrainingEntities(training, trainingId) })
        dispatch({ type: FETCH_TRAINIG_SUCCESS, payload: training })
      },
      error => {
        dispatch({ type: FETCH_TRAINIG_FAILED, error: true, payload: error.message })
      }
    )
  }
}

/**
 * Нормализует объект training к виду entities.
 *
 * @param  {Object} training Данные training.
 *
 * @return {Object}          Возвращает объект entities: { ... }
 */
function getTrainingEntities (training, trainingId) {
  const {
    // id,
    name,
    mode,
    level,
    logo
  } = training

  const lessons = training.lessons.map((lesson, i) => {
    lesson.id = `${trainingId}#${i}`
    return lesson
  })

  return {
    trainings: {
      byId: {
        [trainingId]: {
          id: trainingId,
          name,
          mode,
          level,
          logo,
          lessons: pluck('id', lessons),
          lessonsCompleted: []
        }
      }
    },
    lessons: lessons.reduce((lessons, lesson) => {
      lessons.byId[lesson.id] = {
        id: lesson.id,
        editor: '',
        example: lesson.example,
        exercise: lesson.exercise,
        trainingId: trainingId,
        finishedAt: null,
        statedAt: null,
        keystrokes: 0,
        mistakes: 0
      }
      return lessons
    }, { byId: {} })
  }
}

export function createTraining ({ name, mode, level, lessons }) {
  return (dispatch, getState, services) => {
    dispatch({ type: CREATE_TRAINING, payload: { name, mode, level, lessons } })

    services.training.create({ name, mode, level, lessons }).then(
      training => {
        dispatch({ type: SET_ENTITIES, payload: getTrainingEntities(training) })
        dispatch({ type: CREATE_TRAINING_SUCCESS, payload: training })
      },
      error => {
        dispatch({ type: CREATE_TRAINING_FAILED, error: true, payload: error.message })
      }
    )
  }
}

export function updateTrainingForm ({ name, mode, level, lessons }) {
  return (dispatch, getState, services) => {
    dispatch({ type: UPDATE_TRAINING_FORM, payload: { name, mode, level, lessons } })
  }
}

// export function restartTraining (trainingId) {
//   return (dispatch, getState, services) => {
//     dispatch({ type: RESTART_TRAINING, payload: { trainingId } })
//   }
// }
