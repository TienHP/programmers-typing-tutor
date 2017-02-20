import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import { TEXT, TRAININGS } from '../../constants'
import { findIndex, propEq } from 'ramda'

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

        <div className='trainings-list'>
          {TRAININGS.map(({ id, name, logo, lessons }) => (
            <Link key={id} to={`/${id}`} title={name} onClick={() => fetchTraining(id)}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Welcome