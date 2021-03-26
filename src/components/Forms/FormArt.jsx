import axios from "axios";
import React, { Component } from "react";

class FormArt extends Component {
  state = {
    artistName: "",
    pictureUrl: null,
    title: "",
    description: "",
    larg: 0,
    lng: 0,
    price: 0,
  
  };

  handleChange = (event) => {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });
  };

  handleFileChange = (event) => {
    console.log("The file added by the use is: ", event.target.files[0]);
    this.setState({
      pictureUrl: event.target.files[0],
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit is working");

    axios
      .post("http://localhost:4000/api/artworks/", {
        artistName: this.state.artistName,
        pictureUrl: this.state.pictureUrl,
        title: this.state.title,
        description: this.state.description,
        larg: this.state.larg,
        lng: this.state.lng,
        price: this.state.price,

      })
      .then((response) => {
         this.setState({
          artistName: "",
          pictureUrl: null,
          title: "",
          description: "",
          larg: 0,
          lng: 0,
          price: 0,
         });
        this.props.history.push("/artworks");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form method="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="artistName">Artist Name:</label>
          <input
            id="artistName"
            onChange={this.handleChange}
            value={this.state.artistName}
            name="artistName"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Image</label>
          <input
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="title">Artwork Title:</label>
          <input
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="larg">Width</label>
          <input
            id="larg"
            onChange={this.handleChange}
            value={this.state.larg}
            name="larg"
            type="number"
          />
        </div>
        <div>
          <label htmlFor="lng">Height</label>
          <input
            id="lng"
            onChange={this.handleChange}
            value={this.state.lng}
            name="lng"
            type="number"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            onChange={this.handleChange}
            value={this.state.price}
            name="price"
            type="number"
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default FormArt;
