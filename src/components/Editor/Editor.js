import React, { PropTypes } from 'react'
import CodeMirror from 'react-codemirror'
import classNames from 'classnames'
import {
  TRAININGS_MODES,
  CODE_THEME
} from 'constants'

import './Editor.css'

const Editor = (props) => {
  const {
    code,
    onChangeCode,
    isCompleted,
    mode
  } = props

  const options = {
    mode: mode === 'html' ? 'htmlmixed' : mode,
    theme: CODE_THEME,
    autofocus: true,
    viewportMargin: Infinity,
    readOnly: isCompleted ? 'nocursor' : false
  }

  const classes = classNames(
    'Editor'
  )

  return (
    <CodeMirror
      className={classes}
      value={code}
      options={options}
      onChange={onChangeCode}
    />
  )
}

Editor.propTypes = {
  isCompleted: PropTypes.bool,
  onChangeCode: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  mode: React.PropTypes.oneOf(TRAININGS_MODES).isRequired
}

Editor.defaultProps = {
  isCompleted: false,
  code: ''
}

export default Editor
