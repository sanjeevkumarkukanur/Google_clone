import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path='/' component={Home} /> 
        <Route path='/search' component={SearchPage} /> 
        </Switch>
      

      </Router>
      
    </div>
  );
}

export default App;
