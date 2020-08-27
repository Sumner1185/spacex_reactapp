import React from 'react'
import Rocket from '../rocket/rocket'
import { connect } from "react-redux";
import './listRockets.css'

function listRockets(props) {

  var array = []

  function loopThroughRockets() {
    for(let i = 0; i < props.data.length; i++) {
      array.push(<div className='rocket-item'><Rocket key={i} id={props.data[i].id} name={props.data[i].rocket_name} image={props.data[i].flickr_images[0]} /></div>)
    }
    return array
  }

  return (
    <div className='rockets-list'>
      {loopThroughRockets()}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    data: state.data.rockets,
  };
}

export default connect(mapStateToProps)(listRockets);
