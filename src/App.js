import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { getData } from './ApiRequest/ApiRequest'
import listRockets from './components/listRockets/listRockets'

function App(props) {

  getData()

  if(props.data.loaded === false) {
    return (<div>Loading...</div>)
  } else {
    return (<div>
        { listRockets(props.data.rockets) }
    </div>)
  }
}

  function mapStateToProps(state) {
    return {
      data: state.data,
    };
  }

export default connect(mapStateToProps)(App);