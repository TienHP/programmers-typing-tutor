import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Trainer from './containers/Trainer'
import TrainingNew from './containers/TrainingNew'
import Welcome from './containers/Welcome'

// import {
//   setPage,
//   trackPageView
// } from './utils'

// browserHistory.listen(function (location) {
//   console.log('history.listen', location)
//   setPage({
//     page: location.pathname + location.hash,
//     title: document.location.title
//   })
//   trackPageView()
// })

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Welcome} />
    <Route path='/trainig/new' component={TrainingNew} />
    <Route path='/:id' component={Trainer} />
  </Router>
)

