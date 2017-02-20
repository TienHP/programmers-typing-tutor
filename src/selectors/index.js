import { values } from 'ramda'

export const getTraining = (state, props) => {
  const { id } = props.params
  const { byId } = state.entitites.trainings
  return byId[id]
}

export const getLessonById = (state, id) => {
  return state.entitites.lessons.byId[id]
}

export const getLessons = (state, props) => {
  return values(state.entitites.lessons.byId)
}

export const getTrainings = (state, props) => {
  return values(state.entitites.trainings.byId)
}

export const getTrainingForm = (state, props) => {
  return state.ui.trainingForm
}

