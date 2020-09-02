import { listRockets } from './listRockets'
import React from 'react'
import { shallow } from 'enzyme'
import Rocket from '../rocket/rocket'

describe('<listRockets />', () => {

  test('Renders 1 <Rocket /> component', () => {
    const props = {
      data: {
        rockets: [
          { 
            "id": 1 ,
            "rocket_name": "Falcon1",
            "flickr_image": [ "https://www.someurl.com" ],
            "description": "Huge rocket"
          }
        ]
      }
    }
    jest.mock('./listRockets', () => 'myMock')
    console.log(<myMock />)

    const wrapper = shallow(<listRockets props = { props }/>)
    console.log(wrapper)
    const info = <div className='description'></div>

    expect(wrapper.contains(info)).toEqual(true)
  })
})