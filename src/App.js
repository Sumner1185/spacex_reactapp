import React from 'react';
import './App.css';
import store from './config/store'

function App() {

  const getData = (url) => {
    fetch (url)
      .then((res) => res.json())
      .then((result) => {
        store.dispatch ({
          type: 'ADD_ROCKETS',
          payload: {
            rockets: result
          }
        })
      })
  }
  
  const url = 'https://api.spacexdata.com/v3/rockets'

  getData(url)

  return (
    <div>
      Test
    </div>
  );

 
}

export default App;
