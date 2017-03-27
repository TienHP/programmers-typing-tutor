import pluck from 'ramda/src/pluck'

import {
  COMPLETE_LESSON,
  COMPLETE_TRAINING,
  FETCH_TRAINIG,
  FETCH_TRAINIG_FAILED,
  FETCH_TRAINIG_SUCCESS,
  INCREMENT_MISTAKES,
  SET_CURRENT_LESSON,
  SET_CURRENT_TRAINIG,
  SET_ENTITIES,
  START_LESSON,
  START_TRAINING,
  UPDATE_EDITOR_CODE
} from 'constants'

import {
  trackEvent,
  getRandomLesson
} from 'utilities'

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
        dispatch({ type: COMPLETE_TRAINING, payload: { trainingId } })
        trackEvent({ eventCategory: `Training`, eventAction: 'Complete training', eventLabel: trainingId })
      }

      const nextLessonId = getRandomLesson(training.lessons, training.lessonsCompleted.concat(lessonId))
      if (nextLessonId) {
        dispatch({ type: SET_CURRENT_LESSON, payload: { lessonId: nextLessonId } })
      }
    }
  }
}

export function fetchTraining (trainingId) {
  return (dispatch, getState, services) => {
    // if (getState().entitites.trainings.byId[trainingId]) return false

    dispatch({ type: FETCH_TRAINIG, payload: { trainingId } })
    trackEvent({ eventCategory: `Training`, eventAction: 'Fetch training', eventLabel: trainingId })

    services.training.fetch(trainingId).then(
      training => {
        const entities = getTrainingEntities(training)
        const lessonId = getRandomLesson(training.lessons).id
        dispatch({ type: SET_ENTITIES, payload: entities })
        dispatch({ type: FETCH_TRAINIG_SUCCESS, payload: training })
        dispatch({ type: SET_CURRENT_TRAINIG, payload: { trainingId } })
        dispatch({ type: SET_CURRENT_LESSON, payload: { lessonId } })
      },
      error => {
        dispatch({ type: FETCH_TRAINIG_FAILED, error: true, payload: error.message })
      }
    )
  }
}

/**
 * Normalize training object to entities.
 *
 * @param  {Object} training Training data.
 *
 * @return {Object}          Entities object.
 */
function getTrainingEntities (training) {
  const {
    id,
    name,
    mode,
    level,
    logo
  } = training

  const lessons = training.lessons.map((lesson, i) => {
    lesson.id = `${id}#${i}`
    return lesson
  })

  return {
    trainings: {
      byId: {
        [id]: {
          id: id,
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
        trainingId: id,
        finishedAt: null,
        statedAt: null,
        keystrokes: 0,
        mistakes: 0
      }
      return lessons
    }, { byId: {} })
  }
}
