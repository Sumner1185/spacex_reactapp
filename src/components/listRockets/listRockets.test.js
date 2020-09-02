import ListRockets from './listRockets.js'
import React from 'react'
import { shallow } from 'enzyme'
import Rocket from '../rocket/rocket'
import renderer from "react-test-renderer";
import listRockets from './listRockets.js';
import { loopThroughRockets } from './listRockets.js'

const props = {
  data: {
    rockets: [
      { 
        "id": 1 ,
        "rocket_name": "Falcon1",
        "flickr_images": [ "https://www.someurl.com" ],
        "description": "Huge rocket"
      },
      { 
        "id": 1 ,
        "rocket_name": "Falcon1",
        "flickr_images": [ "https://www.someurl.com" ],
        "description": "Huge rocket"
      }
    ]
  }
}

describe('<listRockets />', () => {


    //   it("renders map information", () => {
    //     expect(component.toJSON()).toMatchSnapshot();
    //   });


    // const wrapper = shallow(<listRockets props = { props }/>)
    // console.log(wrapper)
    // const info = <div className='description'></div>

    // expect(wrapper.contains(info)).toEqual(true)
  })

  describe('loopThroughRockets', function() {

    test('loops through props', function() {
      console.log(loopThroughRockets(props))
      expect(loopThroughRockets(props)).toEqual(' ')
    })

  })
