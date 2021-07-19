import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path='/search'><h1>hey hello i m sanjeev</h1></Route>
        <Route path='/' component={Home} /> 
        </Switch>
      

      </Router>
      
    </div>
  );
}

export default App;
