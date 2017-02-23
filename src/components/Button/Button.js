import React, { PropTypes } from 'react'
import { Link } from 'react-router'
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
  props.type === 'submit'
  ? <button className='ui button' {...props}>{props.children || props.content }</button>
  : <Link className='ui button' {...props}>{props.children || props.content }</Link>
)

Button.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node
}

Button.Group = ButtonGroup

export default Button
