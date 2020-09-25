import React from 'react'
import './App.css';
import {Link, BrowserRouter, Route} from 'react-router-dom'
import { Login } from './pages/Login';
import { Home } from './pages/Home';

function App() {
  return (
    <div>
       <BrowserRouter basename="/">
       <Route component={Login} path="/" exact/>
       <Route component={Home} path="/home" exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
