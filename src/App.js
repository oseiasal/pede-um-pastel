import React from 'react';
import './App.css';
import Header from './components/Header';
import Orders from './components/Orders';
import Register from './components/Register';
import Warehouse from './components/Warehouse';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header  register={<Link to="/register">Register</Link>} 
      warehouse={<Link to="/warehouse">Warehouse</Link>}
      orders={<Link to="/orders">Orders</Link>} 
      />
      <Switch>
          <Route exact path="/register">
          <Register />
          </Route>

          <Route exact path="/warehouse">
          <Warehouse />
          </Route>
      
      
          <Route exact path="/orders">
          <Orders />
          </Route>
     
      </Switch>
    </Router>
  );
}

export default App;
