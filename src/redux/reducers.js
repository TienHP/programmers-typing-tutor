import { combineReducers } from 'redux'
import ui from './ui'
import entitites from './entitites'

const rootReducer = combineReducers({
  ui,
  entitites
})

export default rootReducer
