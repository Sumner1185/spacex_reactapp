import React from 'react';
import './App.css';
import store from './config/store'
import { connect } from "react-redux";
import {getData} from './ApiRequest/ApiRequest'

function App(props) {

  getData()

  if(props.data.loaded === false) {
    return (<div>Loading...</div>)
  } else {
    return (<div>
        {props.data.rockets[0].id}
    </div>)
  }
}

  function mapStateToProps(state) {
    return {
      data: state.data,
    };
  }

export default connect(mapStateToProps)(App);