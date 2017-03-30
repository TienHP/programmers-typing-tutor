import React, { PropTypes } from 'react'
import { keys } from 'ramda'

const List = ({ dataSource, renderRow }) => {
  return <div>
    {keys(dataSource).map(id =>
      <div key={id}>
        {renderRow(dataSource[id])}
      </div>
    )}
  </div>
}

List.propTypes = {
  dataSource: PropTypes.object.isRequired,
  renderRow: PropTypes.func.isRequired
}

List.defaultProps = {
  dataSource: {},
  renderRow: (data) => <div>{data.toString()}</div>
}

export default List
