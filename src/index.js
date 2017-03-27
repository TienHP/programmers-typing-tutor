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

import Trainer from 'containers/Trainer'
import Welcome from 'containers/Welcome'

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
        <Route path='/' exact component={Welcome} />
        <Route path='/:id' component={Trainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
