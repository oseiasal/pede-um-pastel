import React from 'react';
import './App.css';
import Header from './components/Header';
import Orders from './components/Orders';
import Register from './components/Register';
import Warehouse from './components/Warehouse';

function App() {
  return (
    <>
      <Header />
      <Register />
      <Warehouse />
      <Orders />
    </>
  );
}

export default App;
