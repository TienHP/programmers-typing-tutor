import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTraining } from 'actions'
import * as selectors from 'selectors'
import Trainer from 'components/Trainer'

function mapStateToProps (state, props) {
  const { id } = props.match.params

  const training = selectors.getTrainingById(state, id)
  const lesson = false // selectors.getCurrentLesson(state, props)
  // const lessons = selectors.getLessons(state, { trainingId: id })

  return {
    id,
    training,
    completed: false, // training.lessonsCompleted.length === training.lessons.length
    // lesson,
    // lessons,
    isLoaded: !!training && !!lesson
  }
}

const TrainerContainer = connect(
  mapStateToProps,
  {
    fetchTraining
  }
)(Trainer)

TrainerContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
}

export default TrainerContainer
