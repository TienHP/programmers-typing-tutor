import React, { Component, PropTypes } from 'react'
import './Trainer.css'
import Lesson from 'components/Lesson'

class Trainer extends Component {
  componentWillMount () {
    const { slug, training, fetchTraining } = this.props

    if (!training) fetchTraining(slug)
  }

  render () {
    const { training, lesson, lessonResult, code, changeEditorCode } = this.props

    if (!training) return <p>loading training...</p>

    return <Lesson {...{ training, lesson, lessonResult, code, changeEditorCode }} />
  }
}

Trainer.propTypes = {
  slug: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  training: PropTypes.object,
  lesson: PropTypes.object,
  lessonResult: PropTypes.object.isRequired,
  fetchTraining: PropTypes.func.isRequired,
  changeEditorCode: PropTypes.func.isRequired
}

export default Trainer
