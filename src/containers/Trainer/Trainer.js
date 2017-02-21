import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTraining, updateEditorCode } from '../../actions'
import * as selectors from '../../selectors'
import Trainer from '../../components/Trainer'

function mapStateToProps (state, props) {
  const { id } = props.params

  const training = selectors.getCurrentTraining(state, props)
  const lesson = selectors.getCurrentLesson(state, props)
  const lessons = selectors.getLessons(state, { trainingId: id })

  return {
    id,
    training,
    lesson,
    lessons,
    isLoaded: !!training && !!lesson
  }
}

const TrainerContainer = connect(
  mapStateToProps,
  {
    fetchTraining,
    updateEditorCode
  }
)(Trainer)

TrainerContainer.propTypes = {
  params: PropTypes.shape({
    mode: PropTypes.string,
    level: PropTypes.string
  }).isRequired
}

export default TrainerContainer
