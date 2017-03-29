import React from 'react'
import { render } from 'react-dom'

import './index.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/php/php'
import 'codemirror/mode/shell/shell'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
// import 'codemirror/theme/default.css'

import createStore from './redux/createStore'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import WelcomePageContainer from 'containers/WelcomePageContainer'
import TrainingPageContainer from 'containers/TrainingPageContainer'
import TrainingResultPageContainer from 'containers/TrainingResultPageContainer'

/**
 * Create Redux Store
 */
const store = createStore()

/**
 * Render application to DOM
 */
render(
  <Provider store={store}>
    <Router basename='/programmers-typing-tutor'>
      <Switch>
        <Route path='/' exact component={WelcomePageContainer} />
        <Route path='/:id/result' component={TrainingResultPageContainer} />
        <Route path='/:id' component={TrainingPageContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
