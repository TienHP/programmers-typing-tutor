import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { merge, assoc, append } from 'ramda'
import {
  FETCH_TRAINIG_REQUEST,
  FETCH_TRAINIG_SUCCESS,
  FETCH_TRAINIG_ERROR,
  FETCH_TRAINIGS_REQUEST,
  FETCH_TRAINIGS_SUCCESS,
  FETCH_TRAINIGS_ERROR
} from 'constants/trainings'
import {
  FETCH_LESSON_REQUEST,
  FETCH_LESSON_SUCCESS,
  FETCH_LESSON_ERROR,
  FETCH_LESSONS_REQUEST,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSONS_ERROR
} from 'constants/lessons'

export default combineReducers({

  globalErrors: (state = [], action) => {
    if (action.error) {
      console.error(action.payload)
      return append(action.payload, state)
    }
    return state
  },
  ui: combineReducers({
    trainings: combineReducers({
      fetchStatus: handleActions({
        [FETCH_TRAINIGS_REQUEST]: (state, action) => 'loading',
        [FETCH_TRAINIGS_SUCCESS]: (state, action) => 'success',
        [FETCH_TRAINIGS_ERROR]: (state, action) => 'error'
      }, 'not-loaded')
    }),
    lessons: combineReducers({
      fetchStatus: handleActions({
        [FETCH_LESSONS_REQUEST]: (state, action) => 'loading',
        [FETCH_LESSONS_SUCCESS]: (state, action) => 'success',
        [FETCH_LESSONS_ERROR]: (state, action) => 'error'
      }, 'not-loaded')
    })
  }),
  entities: combineReducers({
    trainings: combineReducers({
      entities: handleActions({
        [FETCH_TRAINIGS_SUCCESS]: (state, action) => {
          return merge(state, action.payload)
        },
        [FETCH_TRAINIG_SUCCESS]: (state, action) => {
          return assoc(action.payload.id, action.payload, state)
        }
      }, {}),
      fetchStatus: handleActions({
        [FETCH_TRAINIG_REQUEST]: (state, action) => {
          return assoc(action.payload.id, 'loading', state)
        },
        [FETCH_TRAINIG_SUCCESS]: (state, action) => {
          return assoc(action.payload.id, 'success', state)
        },
        [FETCH_TRAINIG_ERROR]: (state, action) => {
          return assoc(action.payload.id, 'error', state)
        }
      }, {})
    }),

    lessons: combineReducers({
      entities: handleActions({
        [FETCH_LESSONS_SUCCESS]: (state, action) => {
          return merge(state, action.payload)
        },
        [FETCH_LESSON_SUCCESS]: (state, action) => {
          return assoc(action.payload.id, action.payload, state)
        }
      }, {}),
      fetchStatus: handleActions({
        [FETCH_LESSON_REQUEST]: (state, action) => {
          return assoc(action.payload.id, 'loading', state)
        },
        [FETCH_LESSON_SUCCESS]: (state, action) => {
          return assoc(action.payload.id, 'success', state)
        },
        [FETCH_LESSON_ERROR]: (state, action) => {
          return assoc(action.payload.id, 'error', state)
        }
      }, {})
    })
  })
})
