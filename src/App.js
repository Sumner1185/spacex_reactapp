import React from 'react';
import './App.css';
import store from './config/store'
import { connect } from "react-redux";

function App(props) {

  const getData = () => {
    fetch ('https://api.spacexdata.com/v3/rockets')
      .then((res) => res.json())
      .then((result) => {
        store.dispatch ({
          type: 'ADD_ROCKETS',
          payload: {
            rockets: result,
            loaded: true
          }
        })
      })
  }

  getData()

  if(props.rockets.loaded === false) {
    return (<div>{console.log("no rockets")}Loading...</div>)
  } else {
    return (<div>
        {props.rockets.rockets[0].rocket_name}
    </div>)
  }

}


  function mapStateToProps(state) {
    return {
      rockets: state,
    };
  }

export default connect(mapStateToProps)(App);