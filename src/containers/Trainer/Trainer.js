import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTraining } from 'actions'
import Trainer from 'components/Trainer'
import { getRandomLesson, calculateLessonResult } from 'utilities'

function mapStateToProps (state, props) {
  const { slug } = props.match.params
  const trainingId = state.entitites.trainings.bySlug[slug]
  const training = state.entitites.trainings.byId[trainingId]
  const lessonId = training && getRandomLesson(training.lessons)
  const lesson = state.entitites.lessons.byId[lessonId]
  const lessonResult = calculateLessonResult(state.entitites.lessonsResults.byLessonId[lessonId])
  const code = state.ui.training.code

  return {
    slug,
    training,
    lesson,
    lessonResult,
    code
  }
}

const TrainerContainer = connect(
  mapStateToProps,
  { fetchTraining }
)(Trainer)

TrainerContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default TrainerContainer
