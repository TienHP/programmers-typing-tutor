import { connect } from 'react-redux'
import * as selectors from 'selectors'
import Welcome from 'components/Welcome'
import { completedPercent } from 'utilities'

function mapStateToProps (state, props) {
  const trainings = selectors.getTrainingsById(state, props)

  return {
    trainings,
    completedPercent
  }
}

const WelcomeContainer = connect(
  mapStateToProps
)(Welcome)

export default WelcomeContainer
