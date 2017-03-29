import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'components/Button'
import actionCreators from 'actions'

class WelcomePage extends Component {
  componentWillMount () {
    if (!this.props.isFetched) {
      this.props.fetchTrainings()
    }
  }
  render () {
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
            <Button to={`/${slug}`}>Open</Button>
          </div>
        )}
      </div>
    )
  }
}

const WelcomePageContainer = connect(
  (state, props) => {
    return {
      isFetched: state.welcomePage.isFetched,
      trainings: state.welcomePage.trainings
    }
  },
  {
    fetchTrainings: actionCreators.fetch.trainings
  }
)(WelcomePage)

export default WelcomePageContainer
