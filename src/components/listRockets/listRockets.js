import React from 'react'
import Rocket from '../rocket/rocket'
import RocketDesc from '../rocketDesc/rocketDesc'
import { connect } from "react-redux";
import './listRockets.css'

function listRockets(props) {

  var array = []

  function loopThroughRockets() {
    for(let i = 0; i < props.data.length; i++) {
      array.push(<div className='rocket-item' id={props.data[i].id}><Rocket key={i} id={props.data[i].id} name={props.data[i].rocket_name} image={props.data[i].flickr_images[0]} desc={props.data[i].description}/></div>)
    }
    return array
  }

  function findRocket(id) {
    if (id) {
      for(let i = 0; i < props.data.length; i++) {
        if(props.data[i].id === id) {
          return <RocketDesc desc={props.data[i].description}/>
        }
      }
    } else {
      return 
    }
  }

  return (
    <div className='rockets-list'>
          {loopThroughRockets()}
      {findRocket(props.rocketDesc)}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    data: state.data.rockets,
  };
}

export default connect(mapStateToProps)(listRockets);
