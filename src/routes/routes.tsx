import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

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
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <div>Home</div>
            </Route>
            <Route path="/about">
              <div>About</div>
            </Route>
            <Route path="/dashboard">
              <div>Dashboard</div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Routes