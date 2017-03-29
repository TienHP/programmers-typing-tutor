import { createAction } from 'redux-actions';

const fetchTrainings = createAction('FETCH_TRAININGS')

// As parameter in handleAction:
handleAction(fetchTrainings, {
  next(state, action) {...},
  throw(state, action) {...}
});