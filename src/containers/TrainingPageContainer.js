import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'components/Button'
import actionCreators from 'actions'

class TrainingPage extends Component {
  componentWillMount () {
    if (!this.props.isFetched) {
      this.props.fetchTraining(this.props.params.id)
    }
  }
  render () {
    if (!this.props.isFetched) {
      return <div>fetching...</div>
    }

    return (
      <div>
        <h1>Training:</h1>
        <div>id: {this.props.training.id}</div>
        <div>slug: {this.props.training.slug}</div>
        <div>name: {this.props.training.name}</div>

        <h1>Header:</h1>
        <div>keystrokes: {this.props.header.keystrokes}</div>
        <div>elapsedTime: {this.props.header.elapsedTime}</div>
        <div>accuracy: {this.props.header.accuracy}</div>
        <div>progress: {this.props.header.progress}</div>

        <h1>Editor:</h1>
        <div>code: {this.props.editor.code}</div>
        <div>example: {this.props.editor.example}</div>
        <br />
        <Button to={`/`}>Home</Button>
        <Button to={`/${this.props.params.id}/result`}>Result</Button>
      </div>
    )
  }
}

const TrainingPageContainer = connect(
  (state, props) => {
    return {
      isFetched: state.entities.trainings.isFetched[props.match.params.id],
      params: {
        id: props.match.params.id
      },
      training: state.entities.trainings.entities[props.match.params.id],
      header: {
        keystrokes: 0,
        elapsedTime: 0,
        accuracy: 100,
        progress: 0
      },
      editor: {
        code: '',
        example: 'class User {}'
      }
    }
  },
  {
    fetchTraining: actionCreators.fetch.training
  }
)(TrainingPage)

export default TrainingPageContainer
