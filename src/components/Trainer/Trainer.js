import React, { Component, PropTypes } from 'react'
import './Trainer.css'
import Lesson from 'components/Lesson'

class Trainer extends Component {
  componentWillMount () {
    const { slug, training, fetchTraining } = this.props

    if (!training) fetchTraining(slug)
  }

  render () {
    const { training, lesson, lessonResult, code } = this.props

    if (!training) return <p>loading training...</p>

    return <Lesson {...{ training, lesson, lessonResult, code }} />
  }
}

Trainer.propTypes = {
  slug: PropTypes.string.isRequired,
  training: PropTypes.object,
  lesson: PropTypes.object,
  lessonResult: PropTypes.object.isRequired,
  fetchTraining: PropTypes.func.isRequired
}

export default Trainer
