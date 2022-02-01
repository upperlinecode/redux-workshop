import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Provider from "redux";
import Card from "../Card";
import { AppRoot } from "./App.styles";
import { gifData } from "../../data/sample_data";

const AppContainer = () => {
  return <App />;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoot id="App">
        {gifData.map((gif) => {
          return <Card gif={gif} />;
        })}
      </AppRoot>
    </BrowserRouter>
  );
};

export default AppContainer;
