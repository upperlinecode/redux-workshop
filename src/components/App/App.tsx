import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Provider from 'redux';
import { AppRoot } from './App.styles';

const AppContainer = () => {
  return (
      <App />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoot id="App">
      </AppRoot>
    </BrowserRouter>
  );
};

export default AppContainer;
