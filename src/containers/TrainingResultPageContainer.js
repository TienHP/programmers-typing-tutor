import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'components/Button'
import actionCreators from 'actions'

class TrainingPage extends Component {
  componentWillMount () {
    if (!this.props.isFetched) {
      this.props.fetchTraining(this.props.training.slug)
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

        <h1>Training result:</h1>
        <div>mistakes: {this.props.trainingResult.mistakes}</div>
        <div>keystrokes: {this.props.trainingResult.keystrokes}</div>
        <div>accuracy: {this.props.trainingResult.accuracy}</div>
        <div>elapsedTime: {this.props.trainingResult.elapsedTime}</div>

        <h1>Lessons result:</h1>
        {this.props.lessonsResult.map(({ id, mistakes, keystrokes, accuracy, elapsedTime }) =>
          <div key={id}>
            <div>mistakes: {mistakes}</div>
            <div>keystrokes: {keystrokes}</div>
            <div>accuracy: {accuracy}</div>
            <div>elapsedTime: {elapsedTime}</div>
          </div>
        )}
        <br />
        <Button to={`/${this.props.training.slug}`}>Training</Button>
        <Button to={`/`}>Home</Button>
      </div>
    )
  }
}

const TrainingPageContainer = connect(
  (state, props) => {
    return {
      isFetched: state.trainingPage.isFetched[props.match.params.slug],
      training: {
        ...state.trainingPage.training[props.match.params.slug],
        slug: props.match.params.slug
      },
      trainingResult: {
        mistakes: 0,
        keystrokes: 0,
        accuracy: 100,
        elapsedTime: 0
      },
      lessonsResult: [
        {
          id: '04nfh5',
          mistakes: 0,
          keystrokes: 0,
          accuracy: 100,
          elapsedTime: 0
        }
      ]
    }
  },
  {
    fetchTraining: actionCreators.fetch.training
  }
)(TrainingPage)

export default TrainingPageContainer
