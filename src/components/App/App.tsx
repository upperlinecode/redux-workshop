import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Card from "../Card";
import { AppRoot } from "./App.styles";
import { gifData } from "../../data/sample_data";
import configureStore from "../../configureStore";
import initialState from "../../redux/initialState";

const store = configureStore(initialState);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoot id="App">
        {gifData.map((gif) => {
          return <Card key={gif.id} gif={gif} />;
        })}
      </AppRoot>
    </BrowserRouter>
  );
};

export default AppContainer;
