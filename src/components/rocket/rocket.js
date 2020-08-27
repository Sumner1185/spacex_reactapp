import React from 'react'
import store from '../../config/store'
import './rocket.css'

const Rocket = ({id, name, image, desc}) => {


  function getDesc() {
    store.dispatch ({
      type: 'CHANGE_DESC',
      action: desc
    });
  }

  return (<div className='rocket-block'>
    <div className='rocket-name'>
      { name }
    </div>
    <img src={image} alt={'Rocket image' + id } className='rocket-image' onClick={getDesc}/>
    </div>
  )
}

export default Rocket