import React from 'react';
import './App.css';
import Home from './pages/home';
import { Provider } from 'react-redux';
import store from './store'
import NavBar from './pages/navbar';

function App() {
  return (
    <Provider store={store}>
      <NavBar/>
    <Home/>
    </Provider>
  );
}

export default App;
