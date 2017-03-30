import React, { PropTypes } from 'react'

const GlobalError = ({ errors }) => {
  if (!errors.length) return null
  return (
    <div>
      <h1>Errors:</h1>
      {errors.map((error, index) => <p key={index}>{error}</p>)}
    </div>
  )
}

GlobalError.propTypes = {
  errors: PropTypes.array.isRequired
}

export default GlobalError
