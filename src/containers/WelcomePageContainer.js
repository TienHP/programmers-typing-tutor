import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'components/Button'

const fetchTrainings = () => {
  return () => {
    console.log('fetchTrainings')
  }
}

class WelcomePage extends Component {
  componentWillMount () {
    this.props.fetchTrainings()
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
      isFetched: true,
      trainings: [
        {
          id: '9gj56h',
          name: 'Java Script',
          slug: 'javascript',
          progress: 0
        },
        {
          id: '0jfht6',
          name: 'React.js',
          slug: 'react',
          progress: 0
        }
      ]
    }
  },
  {
    fetchTrainings
  }
)(WelcomePage)

export default WelcomePageContainer
