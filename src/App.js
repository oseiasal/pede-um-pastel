import React, { useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Orders from './components/Orders';
import Register from './components/Register';
import Warehouse from './components/Warehouse';
import Login from './components/Login'

import { getMenu } from './API/PastelAPI'


function App() {

  useEffect(() => {
    getMenu();
  })

  return (
    <Router>
      <Header
        login={<Login />}
        home={<Link to="/">Home</Link>}
        register={<Link to="/register">Register</Link>}
        warehouse={<Link to="/warehouse">Warehouse</Link>}
        orders={<Link to="/orders">Orders</Link>}

      />
      <Switch>

        <Route exact path="/">
          <Jumbotron style={{ height: '90vh' }}>

            <h1 class="display-3">Jumbo heading</h1>
            <p class="lead">Jumbo helper text</p>
            <p>More info</p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
            </p>

          </Jumbotron>


        </Route>

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
