// Exercise 2: Set It Up
// write a class component ok
// make it a div with className FeedList ok
// import FeedItem and include it inside the div ok
// export default the component! ok

// Exercise 3: Prop It Up
// FeedList should accept props as params ok
// destructure photos from props ok
// iterate over the data and map each photo data to a FeedItem ok

import React from "react";
import FeedItem from "./FeedItem";

export default class FeedList extends React.Component {
  render() {
    return (
      <div className="FeedList">
        {this.props.photos.map(({ url, likes }, index) => (
          <FeedItem key={index} url={url} likes={likes} />
        ))}
      </div>
    );
  }
}
