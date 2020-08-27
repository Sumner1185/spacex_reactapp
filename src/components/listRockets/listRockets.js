import React from 'react'
import Rocket from '../rocket/rocket'
import RocketDesc from '../rocketDesc/rocketDesc'
import store from '../../config/store'
import { connect } from "react-redux";
import './listRockets.css'

function listRockets(props) {

  var array = []

  function loopThroughRockets() {
    for(let i = 0; i < props.data.rockets.length; i++) {
      array.push(<div className='rocket-item' id={props.data.rockets[i].id}><Rocket key={i} id={props.data.rockets[i].id} name={props.data.rockets[i].rocket_name} image={props.data.rockets[i].flickr_images[0]} desc={props.data.rockets[i].description}/></div>)
    }
    return array
  }

  return (
    <div>
    <div className='rockets-list'>
          {loopThroughRockets()}
    </div>
    <div className='description'>{ props.data.rocketDesc }</div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(listRockets);
