import { combineReducers } from 'redux'

import trainings from './trainings'
import trainingsResults from './trainingsResults'
import lessons from './lessons'
import lessonsResults from './lessonsResults'

export default combineReducers({
  trainings,
  trainingsResults,
  lessons,
  lessonsResults
})
