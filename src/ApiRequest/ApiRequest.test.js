import { data } from '../mockApi'
import store from "../config/store";
import { getData } from "./ApiRequest"


describe('ExampleComponent', () => {
  it('fetches data from server when server returns a successful response', done => { // 1
    const mockSuccessResponse = {data};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({ // 3
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
    

    getData()
                            
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://api.spacexdata.com/v3/rockets');

    process.nextTick(() => { // 6
        
        expect(store.getState().data.loaded).toEqual(true)
        expect(store.getState().data.rockets["data"]).toEqual(data)
  
        global.fetch.mockClear(); // 7
        done(); // 8
      });


  });
});