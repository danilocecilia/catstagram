// Exercise 2: Set It Up
// write a class component ok
// make it a ul with a class name of Header ok
// make four li: Catstagram, Home, About, Profile ok
// put class name of Logo on the li element with GDInsta ok
// export default the component! ok

// Exercise 6: Routing
// import Link from react-router-dom
// use the Link component to link to each route with a 'to' property
// check that your links work!

import React from "react";
import "../style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import AboutPage from "../pages/AboutPage";

export default class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="Header">
            <li className="Logo">
              <Link to="/">Catstagram</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <Switch>
            <Route component={HomePage} exact path="/" />
            <Route component={ProfilePage} path="/profile" />
            <Route component={AboutPage} path="/about" />
          </Switch>
        </div>
      </Router>
    );
  }
}
