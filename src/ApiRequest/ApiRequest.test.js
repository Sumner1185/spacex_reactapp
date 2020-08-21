import { data } from '../mockApi'
import React from "react";
import { getData } from "./ApiRequest";
import store from "../config/store";

describe("get data", () => {

  test("can connect to JSON and add to state", async () => {

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fetchResponse),
      };
      return Promise.resolve(fetchResponse);
    });

    getData().then(console.log(store.getState().data))

    setTimeout(function (){
        expect(store.getState().rockets).toBe(data);
      }, 100)
  });
});