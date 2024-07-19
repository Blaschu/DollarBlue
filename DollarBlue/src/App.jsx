import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Currency from './components/Currency';
import HistoricalRates from './components/HistoricalRates';
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/currency' component={Currency} />
        <Route path='/historical' component={HistoricalRates} />
      </Switch>
    </Router>
  )
}

export default App
