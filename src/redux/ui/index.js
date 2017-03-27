import { combineReducers } from 'redux'

import globalError from './globalError'
import globalNotice from './globalNotice'
import trainingForm from './trainingForm'
import trainingPage from './trainingPage'

const ui = combineReducers({
  globalError,
  globalNotice,
  trainingPage,
  trainingForm
})

export default ui
