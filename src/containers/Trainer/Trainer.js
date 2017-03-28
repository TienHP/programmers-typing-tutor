import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTraining } from 'actions'
// import * as selectors from 'selectors'
import Trainer from 'components/Trainer'

function mapStateToProps (state, props) {
  const { slug } = props.match.params

  return {
    slug
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
      slug: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default TrainerContainer
