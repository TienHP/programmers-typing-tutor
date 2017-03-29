import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import actionCreators from 'actions'

const rootReducer = combineReducers({
  welcomePage: combineReducers({
    isFetched: handleActions({
      [actionCreators.fetch.trainings]: (state, action) => {
        return true
      }
    }, false),
    trainings: handleActions({
      [actionCreators.fetch.trainings]: (state, action) => {
        return action.payload
      }
    }, [])
  })
})

export default rootReducer
