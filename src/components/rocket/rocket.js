import React from 'react'
import store from '../../config/store'
import './rocket.css'

const Rocket = ({id, name, image, desc}) => {

  // window.addEventListener("click", function(){
  //   console.log('clicked')
  //   store.dispatch ({
  //     type: 'CHANGE_DESC',
  //     action: desc
  //   });
  // })

  return (<div>
    <div className='rocket-name'>
      { name }
    </div>
    <img src={image} alt={'Rocket image' + id } className='rocket-image'/>
    </div>
  )
}

export default Rocket