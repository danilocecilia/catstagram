// Exercise 2: Set It Up
// write a class component ok
// make it a div with a class name of HomePage ok
// import ImageUploaderForm and FeedList ok
// include them inside of Homepage ok
// export default the Homepage component! ok

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into FeedList ok

// Exercise 5: Let’s Get InFormation - BONUS
// In order to get Homepage render the photo url you have uploaded to ImageUploader form,
// you will need to create a function called handleAddPhoto that updates photos state by
// accepting a url and creating a new object in photos state of the homepage component.
// Then pass in that function as props to ImageUploaderForm
// and when the user submits, call that function with the user submitted url.

import React from "react";
import "../style.css";
import ImageUploaderForm from "../components/ImageUploaderForm";
import data from "../../data.json";
import FeedList from "../components/FeedList";
import {BrowserRouter as Router} from "react-router-dom";

export default class HomePage extends React.Component {
  state = {
    photos: data.photos
  };

  handleAddPhoto = url => {
    const photo = {
      id: this.state.photos.length + 1,
      title: "title",
      url: url,
      likes: "0",
      userLiked: false
    };
    const newArray = [...this.state.photos, photo];
    this.setState({ photos: newArray.reverse() });

    // this.setState({
    //   photos: [
    //     {
    //       id: this.state.photos.length + 1,
    //       url: url,
    //       likes: 0
    //     },
    //     ...this.state.photos
    //   ]
    // });
    debugger;
  };

  render() {
    return (
      
      <div className="HomePage">
        <ImageUploaderForm addPhoto={this.handleAddPhoto} />
        <FeedList photos={this.state.photos} />
      </div>
      
    );
  }
}
