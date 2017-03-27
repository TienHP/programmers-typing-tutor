import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Header from 'components/Header'
import Example from 'components/Example'
import Editor from 'components/Editor'
import Exercise from 'components/Exercise'
import Button from 'components/Button'

const Lesson = (props) => {
  const {
    training,
    lesson
  } = this.props

  const {
    exercise,
    example
  } = lesson

  const classes = classNames(
    'Trainer'
  )

  const editor = false
  return (
    <div className={classes}>
      <div className='inner'>
        <Header training={training} lesson={lesson} />
        <section className='editors'>
          {example.startsWith(editor) && (
            <Example value={example} mode={training.mode} />
          )}
          <Editor mode={training.mode} />
          <Exercise exercise={exercise} />
        </section>
        <br />
        <Button.Group wide>
          <Button to='/'>Go to welcome page</Button>
          <Button onClick={() => this.props.fetchTraining(training.id)} className='ui button'>Restart training</Button>
        </Button.Group>
      </div>
    </div>
  )
}

Lesson.propTypes = {
  lesson: PropTypes.object.isRequired
}

export default Lesson
