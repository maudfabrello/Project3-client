import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class FormEditArtwork extends Component {
  state = {
    artistName: "",
    pictureUrl: "",
    title: "",
    description: "",
    larg: 0,
    lng: 0,
    price: 0,
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;

    axios
      .get(process.env.REACT_APP_BACKEND_URL + `/api/artworks/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        const data = response.data;

        this.setState({
          artistName: data.artistName,
          pictureUrl: data.pictureUrl,
          title: data.title,
          description: data.description,
          larg: data.dimensions[1],
          lng: data.dimensions[0],
          price: data.price,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;

    const formUpdateData = new FormData();

    formUpdateData.append("artistName", this.state.artistName);
    formUpdateData.append("pictureUrl", this.state.pictureUrl);
    formUpdateData.append("title", this.state.title);
    formUpdateData.append("description", this.state.description);
    formUpdateData.append("larg", this.state.larg);
    formUpdateData.append("lng", this.state.lng);
    formUpdateData.append("price", this.state.price);

    axios
      .patch(
        process.env.REACT_APP_BACKEND_URL + `/api/artworks/edit/${id}`,
        formUpdateData,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImage = (event) => {
    const file = event.target.files[0]; // Get the value of file input
    console.log(file);
    // console.log(file, "this is the file");
    this.setState({ pictureUrl: file });
  };

  render() {
    return (
      <div className="create-edit-container">
        <h1> Edit your artwork </h1>
        <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
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
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(FormEditArtwork);
