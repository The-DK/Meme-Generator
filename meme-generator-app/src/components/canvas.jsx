import React, { Component } from "react";
import { createElement } from "react";

class Canvas extends Component {
  state = {};

  canvasStyle = {
    marginRight: "20px",
  };

  renderImage = () => {
    const canvas = this.refs.canvas;
    var img = this.refs.memeImg;
    const { imageURL } = this.props.data;
    if (imageURL !== "") {
      const context = canvas.getContext("2d");

      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      //   Scaling the image to fit the 500x500 canvas
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        img.width * ratio,
        img.height * ratio
      );
      context.font = "20pt Calibri";
      context.fillText("My TEXT!", canvas.width / 5, canvas.height / 10);
    }
  };

  render() {
    return (
      <div style={this.canvasStyle}>
        <p>Canvas</p>
        <canvas
          ref="canvas"
          style={{ border: "1px solid black" }}
          width="500"
          height="500"
        ></canvas>
        <img
          ref="memeImg"
          src={this.props.data.imageURL}
          alt="Meme Image"
          style={{ display: "none" }}
          onLoad={this.renderImage}
        />
      </div>
    );
  }
}

export default Canvas;
