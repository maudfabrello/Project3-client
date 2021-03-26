import axios from "axios";
import React from "react";

class FormEditArtwork extends React.Component {
  state = {
    artistName: "",
    pictureUrl: null,
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
      .get(`http://localhost:4000/api/artworks/${id}`)
      .then((response) => {
        const data = response.data;

        this.setState({
          artistName: data.artistName,
          pictureUrl: data.pictureUrl,
          title: data.title,
          description: data.description,
          larg: data.larg,
          lng: data.lng,
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
    axios
      .patch(`http://localhost:4000/api/artworks/${id}`, {
          artistName: this.state.artistName,
          pictureUrl: this.state.pictureUrl,
          title: this.state.title,
          description: this.state.description,
          larg: this.state.larg,
          lng: this.state.lng,
          price: this.state.price,
      })
      .then((response) => {
        this.props.history.push("/api/artworks");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (event) => {
    console.log("The file added by the use is: ", event.target.files[0]);
    this.setState({
      pictureUrl: event.target.files[0],
    });
  };

  render() {
    return (
      <div>
        <h1> Editing your artwork </h1>
        <form onSubmit={this.handleSubmit}>
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
            value={this.state.pictureUrl}
            onChange={this.handleFileChange}
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
      </div>
    );
  }
}

export default FormEditArtwork ;
