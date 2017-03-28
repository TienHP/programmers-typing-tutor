import React, { Component, PropTypes } from 'react'
// import { TEXT } from 'constants'
import './Trainer.css'
// import Success from 'components/Success'
// import Lesson from 'components/Lesson'

class Trainer extends Component {
  componentWillMount () {
    const { slug, isLoaded, fetchTraining } = this.props

    if (!isLoaded) fetchTraining(slug)
  }

  render () {
    const {
      slug
    } = this.props
    return <p>{slug}</p>

  }
}

Trainer.propTypes = {
  slug: PropTypes.string.isRequired,
  training: PropTypes.object,
  lesson: PropTypes.object,
  fetchTraining: PropTypes.func.isRequired
}

export default Trainer
