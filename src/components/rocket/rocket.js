import React from 'react'

const Rocket = ({id, name, image}) => {
  return (<div>
    <img src={image} />
    <div>
      { name }
    </div>
    </div>
  )
}

export default Rocket