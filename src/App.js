import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      Test
    </div>
  );

  fetch (url)
    .then((res) => res.JSON())
    .then((result) => {
      store.dispatch ({
        type: 'ADD_ROCKETS',
        payload: {
          rockets: response
        }
      })
    })
}

export default App;
