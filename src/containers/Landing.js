import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as trainingsActions from 'actions/trainings'
import Button from 'components/Button'
import GlobalError from 'components/GlobalError'
import List from 'components/List'

class WelcomePage extends Component {
  componentWillMount () {
    setTimeout(() => this.props.fetchTrainings(), 1000)
  }
  render () {
    return (
      <div>
        <GlobalError errors={this.props.globalErrors} />
        <div>fetchStatus: {this.props.fetchStatus}</div>
        <br />
        <List
          dataSource={this.props.trainings}
          renderRow={training =>
            <div>
              <div>name: {training.name}</div>
              <div>slug: {training.slug}</div>
              <div>progress: {training.progress}</div>
              <Button to={`/${training.id}`}>Open</Button>
            </div>
          }
        />
      </div>
    )
  }
}

const WelcomePageContainer = connect(
  (state, props) => {
    return {
      globalErrors: state.globalErrors,
      fetchStatus: state.ui.trainings.fetchStatus,
      trainings: state.entities.trainings.entities
    }
  },
  {
    fetchTrainings: trainingsActions.fetchTrainings
  }
)(WelcomePage)

export default WelcomePageContainer
