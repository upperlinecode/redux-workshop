import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Provider from 'redux';
import Card from '../Card';
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
        <Card/>
      </AppRoot>
    </BrowserRouter>
  );
};

export default AppContainer;
