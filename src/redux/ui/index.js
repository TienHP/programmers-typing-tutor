import { combineReducers } from 'redux'

import globalError from './globalError'
import globalNotice from './globalNotice'
import training from './training'

const ui = combineReducers({
  globalError,
  globalNotice,
  training
})

export default ui
