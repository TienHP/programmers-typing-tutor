import { combineReducers } from 'redux'

import trainings from './trainings'
import lessons from './lessons'

export default combineReducers({
  trainings,
  lessons
})
