import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import actionCreators from 'actions'

export default combineReducers({
  welcomePage: combineReducers({
    isFetched: handleActions({
      [actionCreators.fetch.trainings]: (state, action) => true
    }, false),
    trainings: handleActions({
      [actionCreators.fetch.trainings]: (state, action) => action.payload
    }, [])
  }),

  trainingPage: combineReducers({
    isFetched: handleActions({
      [actionCreators.fetch.training]: (state, action) => ({
        ...state,
        [action.payload.slug]: true
      })
    }, {}),
    training: handleActions({
      [actionCreators.fetch.training]: (state, action) => ({
        ...state,
        [action.payload.slug]: action.payload
      })
    }, {})
  })
})
