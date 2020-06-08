import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import About from '../components/about'
import Home from '../components/home'
import Account from '../components/account'

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/account?name=netflix">Netflix</Link>
            </li>
            <li>
              <Link to="/account?name=zillow-group">Zillow Group</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Routes
