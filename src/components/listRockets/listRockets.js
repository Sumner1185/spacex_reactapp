import React from 'react'
import Rocket from '../rocket/rocket'
import { connect } from "react-redux";

function listRockets(props) {

  var array = []

  function loopThroughRockets() {
    for(let i = 0; i < props.data.length; i++) {
      array.push(<Rocket key={i} id={props.data[i].id} name={props.data[i].rocket_name} image={props.data[i].flickr_images[0]} />)
    }
    return array
  }

  return (
    <div>
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
