import { connect } from 'react-redux'
import { fetchTraining } from 'actions'
import * as selectors from 'selectors'
import Welcome from 'components/Welcome'

const completedPercent = training => Math.floor(training.lessonsCompleted.length / training.lessons.length * 100)

function mapStateToProps (state, props) {
  const trainings = selectors.getTrainingsById(state, props)

  return {
    trainings,
    completedPercent
  }
}

const WelcomeContainer = connect(
  mapStateToProps,
  { fetchTraining }
)(Welcome)

export default WelcomeContainer
