// Exercise 2: Set It Up
// write a class component ok
// make it a div with a class name of App ok
// import Header and Homepage ok
// include them inside of App ok
// export the App component! ok

// Exercise 6: Routing
// Allow your user to route to different pages!
// need to import BrowserRouter and Router from react-router-dom
// Create basic class components on AboutPage and Profile Page, export them
// import them in this file
// set up BrowserRouter
// set up Route to with paths to each page (hint: HomePage should "/") and with the appropriate component

import React from "react";
import Header from "./components/Header.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
