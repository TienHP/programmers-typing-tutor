// import { values } from 'ramda'

export const getTraining = (state, props) => {
  const { id } = props.params
  const { byId } = state.entitites.trainings
  return byId[id]
}

export const getLessonById = (state, id) => {
  return state.entitites.lessons.byId[id]
}

export const getLessons = (state, props) => {
  const training = state.entitites.trainings.byId[props.trainingId]
  if (!training) return []
  return training.lessons.map(lessonId => state.entitites.lessons.byId[lessonId])
}

export const getTrainingsById = (state, props) => {
  return state.entitites.trainings.byId
}

export const getTrainingForm = (state, props) => {
  return state.ui.trainingForm
}

