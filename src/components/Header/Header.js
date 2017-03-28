import React, { PropTypes } from 'react'
import Statistics from 'components/Statistics'

const Header = (props) => {
  const {
    keystrokes,
    elapsedTime,
    accuracy,
    completed
  } = props

  return (
    <div className='header'>
      <Statistics icon='speedometer' value={keystrokes} label='keystrokes' />
      <Statistics icon='clock' value={`${elapsedTime} sec`} label='elapsed time' />
      <Statistics icon='pinpoint' value={`${accuracy}%`} label='accuracy' />
      <Statistics icon='graph' value={`${completed}%`} label='completed' />
    </div>
  )
}

Header.propTypes = {
  keystrokes: PropTypes.number.isRequired,
  elapsedTime: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired
}

export default Header
