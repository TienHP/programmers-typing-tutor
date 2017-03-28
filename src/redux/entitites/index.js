import { combineReducers } from 'redux'

import trainings from './trainings'
import lessons from './lessons'
import lessonsResults from './lessonsResults'

export default combineReducers({
  trainings,
  lessons,
  lessonsResults
})
