import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Trainer from './containers/Trainer'
import Welcome from './containers/Welcome'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Welcome} />
    <Route path='/:id' component={Trainer} />
  </Router>
)

