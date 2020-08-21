import store from '../config/store'

export function getData() {
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

