import React from 'react'
import './rocket.css'

const Rocket = ({id, name, image}) => {
  return (<div>
    <div className='rocket-name'>
      { name }
    </div>
    <img src={image} alt={'Rocket image' + id } className='rocket-image'/>
    </div>
  )
}

export default Rocket