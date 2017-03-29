import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import actionCreators from 'actions'
import { map, merge, assoc } from 'ramda'

export default combineReducers({

  globalErrors: (state = [], action) => {
    if (action.error) {
      console.error(action.payload)
      return [
        ...state,
        action.payload.message
      ]
    }
    return state
  },

  entities: combineReducers({
    trainings: combineReducers({
      entities: handleActions({
        [actionCreators.fetch.trainings]: (state, action) => {
          if (action.error) return state
          return merge(state, action.payload)
        },
        [actionCreators.fetch.training]: (state, action) => {
          if (action.error) return state
          return assoc(action.payload.id, action.payload, state)
        }
      }, {}),
      isFetched: handleActions({
        [actionCreators.fetch.trainings]: (state, action) => {
          if (action.error) return state
          const entities = map(() => true, action.payload)
          return merge(state, entities)
        },
        [actionCreators.fetch.training]: (state, action) => {
          if (action.error) return state
          return assoc(action.payload.id, true, state)
        }
      }, {})
    }),

    lessons: combineReducers({
      entities: handleActions({
        [actionCreators.fetch.lesson]: (state, action) => {
          if (action.error) return state
          return assoc(action.payload.id, action.payload, state)
        }
      }, {}),
      isFetched: handleActions({
        [actionCreators.fetch.lesson]: (state, action) => {
          if (action.error) return state
          return assoc(action.payload.id, true, state)
        }
      }, {})
    })
  })
})
