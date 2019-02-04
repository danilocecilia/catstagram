// Exercise 2: Set It Up
// write a class component ok
// make it a div with className FeedItem ok
// make an img element inside ok
// import Likes, include it underneath img ok
// export default the component! ok

// Exercise 3: Prop It Up
// pass in props as params to the component ok
// destructure what you need from the props ok
// Hint: what do you need in order to get the image to display? ok
// Hint: what do you need in order to get likes to display in the Likes component? ok

import React from "react";
import Likes from "./Likes";

export default class FeedItem extends React.Component {
  render() {
    const { url, likes } = this.props;
    return (
      <div className="FeedItem">
        <img className="Image" src={url} />
        <Likes likes={likes} />
      </div>
    );
  }
}
