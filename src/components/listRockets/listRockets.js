import React from 'react'
import Rocket from '../rocket/rocket'
import { connect } from "react-redux";
import './listRockets.css'

export function loopThroughRockets(props) {
  let array = []
  for(let i = 0; i < props.data.rockets.length; i++) {
    array.push(
    <div className='rocket-item' id={props.data.rockets[i].id}>
      <Rocket key={i} id={props.data.rockets[i].id} name={props.data.rockets[i].rocket_name} image={props.data.rockets[i].flickr_images[0]} desc={props.data.rockets[i].description}/>
    </div>)
  }
  return array
}

export class ListRockets extends React.Component {
  constructor(props) {
    super(props);
    this.array = []
  }

  // loopThroughRockets() {
  //   for(let i = 0; i < this.props.data.rockets.length; i++) {
  //     this.array.push(
  //     <div className='rocket-item' id={this.props.data.rockets[i].id}>
  //       <Rocket key={i} id={this.props.data.rockets[i].id} name={this.props.data.rockets[i].rocket_name} image={this.props.data.rockets[i].flickr_images[0]} desc={this.props.data.rockets[i].description}/>
  //     </div>)
  //   }
  //   return this.array
  // }

    render() {
      return (
        <div>
        <div className='rockets-list'>
              {loopThroughRockets(this.props)}
        </div>
        <div className='description'>{ this.props.data.rocketDesc }</div>
        </div>
      )
    }
  

}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(ListRockets);
