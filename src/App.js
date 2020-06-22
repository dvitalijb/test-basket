import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';
import { BasketHandler } from './components/BasketHandler';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BasketHandler />
    </Provider>
  );
}

export default App;
