import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class FormArt extends Component {
  state = {
    artistName: "",
    pictureUrl: "",
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


  handleImage = (event) => {
    const file = event.target.files[0]; // Get the value of file input
    console.log(file);
    // console.log(file, "this is the file");
    this.setState({ pictureUrl: file });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit is working");
    const formData = new FormData();

    formData.append("artistName", this.state.artistName);
    formData.append("pictureUrl", this.state.pictureUrl);
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("larg", this.state.larg);
    formData.append("lng", this.state.lng);
    formData.append(" price", this.state.price);
  

    axios
      .post("http://localhost:4000/api/artworks/", formData, { withCredentials: true })
      .then((response) => {
        const id = this.props.match.params.id;
        //HOW DO WE GET THE ID????DONC GALLERY SORT
        console.log(id);
        this.props.history.push(`api/artworks`);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ message: error.response.data.message });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}  enctype="multipart/form-data">
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
          <label htmlFor="pictureUrl">Image</label>
          <input
            id="pictureUrl"
            name="pictureUrl"
            // value={this.state.pictureUrl}
            onChange={this.handleImage}
            type="file"
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

export default withRouter(FormArt);
