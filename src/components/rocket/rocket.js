import React from 'react'

const Rocket = ({id, name, image}) => {
  return (<div>
    <img src={image} alt={'Rocket image' + id }/>
    <div>
      { name }
    </div>
    </div>
  )
}

export default Rocket