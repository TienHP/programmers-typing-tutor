import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import './Trainer.css'
import { TEXT } from '../../constants'

import Editor from '../Editor'
import Example from '../Example'
import Exercise from '../Exercise'
import Success from '../Success'
import Header from '../Header'
import Button from '../Button'

class Trainer extends Component {

  render () {
    const {
      training,
      isLoaded
    } = this.props

    if (!isLoaded) {
      return (
        <div className='Trainer'>{TEXT.Trainer.loading}</div>
      )
    }

    const completed = training.lessonsCompleted.length === training.lessons.length

    if (completed) {
      return this.renderFinishScreen()
    } else {
      return this.renderLesson()
    }
  }

  renderFinishScreen () {
    const {
      training,
      lessons,
      fetchTraining
    } = this.props

    const classes = classNames(
      'Trainer',
      'completed'
    )

    return (
      <div className={classes}>
        <div className='inner'>
          <Success
            training={training}
            lessons={lessons}
            fetchTraining={fetchTraining}
          />
        </div>
      </div>
    )
  }

  renderLesson () {
    const {
      training,
      lesson
    } = this.props

    const {
      editor,
      exercise,
      example
    } = lesson

    const classes = classNames(
      'Trainer'
    )

    return (
      <div className={classes}>
        <div className='inner'>
          <Header training={training} lesson={lesson} />
          <section className='editors'>
            {example.startsWith(editor) && (
              <Example value={example} mode={training.mode} />
            )}
            <Editor
              value={editor}
              mode={training.mode}
              onChangeCode={code => this.props.updateEditorCode(lesson.id, code)}
            />
            <Exercise exercise={exercise} />
          </section>
          <br />
          <Button to='/'>Go to welcome page</Button>
        </div>
      </div>
    )
  }
}

Trainer.propTypes = {
  id: PropTypes.string.isRequired,
  training: PropTypes.object,
  lesson: PropTypes.object,
  updateEditorCode: PropTypes.func.isRequired,
  fetchTraining: PropTypes.func.isRequired
}

export default Trainer
