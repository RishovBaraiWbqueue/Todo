import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Component from './Components/Component';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Provider store = {store}>
        <Component />
      </Provider>
    </div>
  );
}

export default App;
