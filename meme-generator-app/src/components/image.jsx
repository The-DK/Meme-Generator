import React, { Component } from "react";

class Image extends Component {
  state = {};

  imageStyle = {
    display: "flex",
    flexDirection: "column",
  };

  elementStyle = {
    margin: "5px",
  };

  render() {
    return (
      <div style={this.imageStyle}>
        <p>Upload Image</p>
        <input
          style={this.elementStyle}
          type="file"
          accept="image/png, image/jpeg"
          onChange={this.props.handleImageChange}
        />
        <input
          style={this.elementStyle}
          type="text"
          placeholder="Top Text"
          id="topText"
          onChange={this.props.handleTextChange}
        />
        <input
          style={this.elementStyle}
          type="text"
          placeholder="Bottom Text"
          id="bottomText"
          onChange={this.props.handleTextChange}
        />
      </div>
    );
  }
}

export default Image;
