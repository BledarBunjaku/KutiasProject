import React, { useState } from 'react'
import Login from './components/Login/login'
import Home from './components/Home/home'
import KafeMarket from './components/kafe_market/kafe-market'
import KafePorosia from './components/Kafe-porosia/kafePorosia'
import ListaAktive from './components/Lista-aktive/listaAktive'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const userState = useState({
    name: '',
    password: ''
  })

  const orderState = useState({})

  console.log('TE DHENAT', orderState[0])

  return (
    <Router>
      <Link to="/"></Link>
      <Link to="/home"></Link>
      <Switch>
        <Route path="/listaaktive">
          <ListaAktive userState={userState} orderState={orderState} />
        </Route>
        <Route path="/kafemarket">
          <KafeMarket userState={userState} />
        </Route>
        <Route path="/kafeporosia">
          <KafePorosia userState={userState} orderState={orderState} />
        </Route>
        <Route path="/home">
          <Home userState={userState} />
        </Route>
        <Route path="/">
          <Login userState={userState} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
