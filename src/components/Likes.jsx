// Exercise 2: Set It Up
// write a class component ok
// make it a div with a class name of Likes ok
// write a span and a button element inside ok
// export default the component! ok

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it. ok

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
// add a constructor with initial state
// add a button to the rendered JSX with an onClick attribute
// add a method to handle the click/ change the state
// hook up the button text to the state
// BONUS: Create a likes counter
// take in a prop for the number of likes
// increase or decrease the likes based on whether button click is like/ unlike
// hint: take the total likes as a prop, and convert it to state

import React from "react";

export default class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      count: props.likes
    };
  }

  handleClick = () => {
    let { count, liked } = this.state;

    this.setState({
      liked: !this.state.liked,
      count: !liked ? ++count : --count
    });
  };

  render() {
    const { liked, count } = this.state;
    return (
      <div className="Likes">
        <span>{count}</span>
        <button onClick={this.handleClick}>{liked ? "Liked" : "Like"}</button>
      </div>
    );
  }
}
