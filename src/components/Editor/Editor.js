import React, { Component, PropTypes } from 'react'
import CodeMirror from 'react-codemirror'
import classNames from 'classnames'
import {
  TRAININGS_MODES,
  CODE_THEME
} from 'constants'

import './Editor.css'

class Editor extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      code: ''
    }
    this.onChangeCode = this.onChangeCode.bind(this)
  }
  onChangeCode (code) {
    this.setState({ code })
  }
  render () {
    const {
      completed,
      mode
    } = this.props

    const options = {
      mode: mode === 'html' ? 'htmlmixed' : mode,
      theme: CODE_THEME,
      autofocus: true,
      viewportMargin: Infinity,
      readOnly: completed ? 'nocursor' : false
    }

    const classes = classNames(
      'Editor'
    )

    return (
      <CodeMirror
        className={classes}
        value={this.state.code}
        options={options}
        onChange={this.onChangeCode}
      />
    )
  }
}

Editor.propTypes = {
  completed: PropTypes.bool,
  mode: React.PropTypes.oneOf(TRAININGS_MODES).isRequired
}

export default Editor
