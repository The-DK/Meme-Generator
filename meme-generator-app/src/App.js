import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Canvas from "./components/canvas";
import Image from "./components/image";

class App extends Component {
  state = {
    imageURL: "",
    topText: "",
    bottomText: "",
    topFont: "",
    bottomFont: "",
  };

  appStyle = {
    display: "flex",
    flexDirection: "row",
  };

  handleImageChange = (e) => {
    const file_element = e.target;
    if (file_element.files.length !== 0) {
      // console.log(file_element.files[0].name);
      const imageURL = URL.createObjectURL(file_element.files[0]);
      console.log(imageURL);
      this.setState({ imageURL: imageURL });
    }
  };

  handleTextChange = (e) => {
    const text_elem = e.target;
    this.setState({
      [text_elem.id]: text_elem.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Meme Generator</h1>
        <div style={this.appStyle}>
          <Canvas data={this.state} />
          <Image
            data={this.state}
            handleImageChange={this.handleImageChange}
            handleTextChange={this.handleTextChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
