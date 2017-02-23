// import CodeMirror from 'react-codemirror'
import React, { PropTypes } from 'react'
import classNames from 'classnames'
import './Success.css'
import { sum, pluck } from 'ramda'
import { calculateAccuracy } from '../../utils'
import Icon from '../Icon'
import Button from '../Button'
import {
  // CODE_THEME,
  TEXT
} from '../../constants'

const Success = ({ training, lessons, fetchTraining }) => {
  const classes = classNames(
    'Success'
  )

  const totalKeystrokes = sum(pluck('keystrokes', lessons))
  const totalMistakes = sum(pluck('mistakes', lessons))
  const totalAccuracy = calculateAccuracy(totalMistakes, totalKeystrokes)
  const totalElapsedTime = sum(pluck('elapsedTime', lessons)) / 1000

  return (
    <div className={classes}>
      <h1>{training.name} completed!</h1>

      <table className='lessons-statistics'>
        <thead>
          <tr>
            <th>
              <Icon name='bug' size={40} color='rgba(255, 255, 255, 0.5)' />
              <br />{TEXT.Success.mistakes}
            </th>
            <th>
              <Icon name='speedometer' size={40} color='rgba(255, 255, 255, 0.5)' />
              <br />{TEXT.Success.keystrokes}
            </th>
            <th>
              <Icon name='pinpoint' size={40} color='rgba(255, 255, 255, 0.5)' />
              <br />{TEXT.Success.accuracy}
            </th>
            <th>
              <Icon name='clock' size={40} color='rgba(255, 255, 255, 0.5)' />
              <br />{TEXT.Success.elapsedTime}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='highlighted'>
            <td>{totalMistakes}</td>
            <td>{totalKeystrokes}</td>
            <td>{totalAccuracy}%</td>
            <td>{totalElapsedTime} sec</td>
          </tr>
          {lessons.map(({ id, mode, example, mistakes, keystrokes, elapsedTime }) => (
            <tr key={id}>
              <td>{mistakes}</td>
              <td>{keystrokes}</td>
              <td className='progress-bar'>
                <div className='bar' style={{ width: `${calculateAccuracy(mistakes, keystrokes)}%` }}>
                  {calculateAccuracy(mistakes, keystrokes)}%
                </div>
              </td>
              <td>{elapsedTime / 1000} sec</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Button.Group wide>
        <Button to='/' className='ui button'>Go to welcome page</Button>
        <Button onClick={() => fetchTraining(training.id)}className='ui button'>Restart training</Button>
      </Button.Group>
    </div>
  )
}

Success.propTypes = {
  training: PropTypes.object.isRequired,
  lessons: PropTypes.array.isRequired
}

export default Success
