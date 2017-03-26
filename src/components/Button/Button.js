import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import './Button.css'

const ButtonGroup = ({ children, wide }) => (
  <div className={cx(
    'ui buttons',
    wide && 'wide'
  )}>
    {children}
  </div>
)

const Button = (props) => (
  props.to
  ? <Link className='ui button' {...props}>{props.children || props.content }</Link>
  : <button className='ui button' {...props}>{props.children || props.content }</button>
)

Button.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node
}

Button.Group = ButtonGroup

export default Button
