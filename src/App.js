import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Laserhair from './Pages/LaserHair/Laserhair';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { useContext } from "react";
import {Context} from "./context/Context"

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Fragment>
      <div className="App">
        <Switch>
          <Route path="/login">
            {user ? <Home /> : <Login/>}
          </Route>
          <Route path="/register">
            {user ? <Home/> : <Register/>}
          </Route>
          <Route path="/laserhair">
            <Laserhair/>
          </Route>
          <Route exact path="/">
            <Home/> 
          </Route>
        </Switch>
        </div>
        <a href="https://wa.me/country_code_and_your_phone_number" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
        </Fragment>
    </Router>
  );
}

export default App;
