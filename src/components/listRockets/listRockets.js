import React from 'react'
import Rocket from '../rocket/rocket'

const loopThroughRockets = (props) => {
  props.forEach(function(i) {
   return (<Rocket id={i.id} name={i.rocket_name} />)
  })
}

function listRockets(props) {
  return (
    <div>
      { loopThroughRockets(props) }
    </div>
  )
}

export default listRockets
