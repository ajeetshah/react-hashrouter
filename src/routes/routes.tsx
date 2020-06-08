import React from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import About from '../components/about'
import Home from '../components/home'
import Person from '../components/person'

const Routes = () => {
  return (
    <>
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/person">Person</Link>
            </li>
            <li>
              <Link to="/person?id=1">Person 1</Link>
            </li>
            <li>
              <Link to="/person?id=2">Person 2</Link>
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
            <Route exact path="/person">
              <Person />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </>
  )
}

export default Routes
