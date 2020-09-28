import React from 'react'
import './App.css';
import {Link, BrowserRouter, Route} from 'react-router-dom'
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import Modal from './components/Modal'

function App() {
  return (
    <div>
       <BrowserRouter basename="/">
       <Route component={Login} path="/" exact/>
       <Route component={Home} path="/home" exact/>
       <Route component={Modal} path="/modal" exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
