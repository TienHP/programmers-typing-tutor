import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreators from 'actions'
import { values } from 'ramda'
import Button from 'components/Button'
import GlobalError from 'components/GlobalError'

class WelcomePage extends Component {
  componentWillMount () {
    this.props.fetchTrainings()
  }
  render () {
    if (this.props.errors.length) {
      return <GlobalError errors={this.props.errors} />
    }

    if (!this.props.isFetched) {
      return <div>fetching...</div>
    }

    return (
      <div>
        {this.props.trainings.map(({ id, name, slug, progress }) =>
          <div key={id}>
            <div>name: {name}</div>
            <div>slug: {slug}</div>
            <div>progress: {progress}</div>
            <Button to={`/${id}`}>Open</Button>
          </div>
        )}
      </div>
    )
  }
}

const WelcomePageContainer = connect(
  (state, props) => {
    const trainings = values(state.entities.trainings.entities)
    return {
      isFetched: trainings.length,
      trainings,
      errors: state.errors
    }
  },
  {
    fetchTrainings: actionCreators.fetch.trainings
  }
)(WelcomePage)

export default WelcomePageContainer
