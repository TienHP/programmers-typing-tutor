import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import { TEXT, TRAININGS } from '../../constants'
import { findIndex, propEq } from 'ramda'
import Icon from '../Icon'

import './Welcome.css'

const Welcome = (props) => {
  const classes = classNames(
    'Welcome'
  )
  const fetchTraining = (id) => {
    const notFetched = findIndex(propEq('id', id), props.trainings) === -1
    if (notFetched) {
      props.fetchTraining(id)
    }
  }
  return (
    <div className={classes}>
      <div className='inner'>
        <h1>{TEXT.Welcome.title}</h1>
        <h2>{TEXT.Welcome.subtitle}</h2>
        <div className='github'>
          <a href='https://github.com/kulakowka/programmers-typing-tutor' target='_blank'>
            <Icon name='github' /> kulakowka/programmers-typing-tutor
          </a>
        </div>
        <div className='trainings-list'>
          {TRAININGS.map(({ id, name, logo, lessons }) => {
            const training = props.trainings[id]
            return (
              <Link key={id} to={`/${id}`} title={name} onClick={() => fetchTraining(id)}>
                {name}
                {training && <span className='completed'>{training.lessonsCompleted.length} of {training.lessons.length}</span>}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Welcome
