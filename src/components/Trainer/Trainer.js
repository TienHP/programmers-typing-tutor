import React, { Component, PropTypes } from 'react'
import { TEXT } from 'constants'
import './Trainer.css'
import Success from 'components/Success'
import Lesson from 'components/Lesson'

class Trainer extends Component {
  componentWillMount () {
    const {
      id,
      isLoaded,
      fetchTraining
    } = this.props

    if (!isLoaded) {
      fetchTraining(id)
    }
  }
  render () {
    const {
      completed,
      training,
      lesson,
      isLoaded
    } = this.props

    if (!isLoaded) return <div className='Trainer'>{TEXT.Trainer.loading}</div>
    if (completed) return <Success {...{ training }} />
    return <Lesson {...{ lesson }} />
  }
}

Trainer.propTypes = {
  id: PropTypes.string.isRequired,
  training: PropTypes.object,
  lesson: PropTypes.object,
  fetchTraining: PropTypes.func.isRequired
}

export default Trainer
