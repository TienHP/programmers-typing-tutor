import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import actionCreators from 'actions'
import { indexBy, prop, map, merge, assoc } from 'ramda'

export default combineReducers({
  entities: combineReducers({
    trainings: combineReducers({
      entities: handleActions({
        [actionCreators.fetch.trainings]: (state, action) => {
          const entities = indexBy(prop('id'), action.payload)
          return merge(state, entities)
        },
        [actionCreators.fetch.training]: (state, action) => {
          return assoc(action.payload.id, action.payload, state)
        }
      }, {}),
      isFetched: handleActions({
        [actionCreators.fetch.trainings]: (state, action) => {
          const entities = map(() => true, indexBy(prop('id'), action.payload))
          return merge(state, entities)
        },
        [actionCreators.fetch.training]: (state, action) => {
          return assoc(action.payload.id, true, state)
        }
      }, {})
    })
  })
})
