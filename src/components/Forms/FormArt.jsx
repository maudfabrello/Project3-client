import axios from "axios";
import React, { Component } from "react";

class FormArt extends Component {
  state = {
    pictureUrl: "",
    title: "",
    description: "",
    dimensions: [0,0],
    price: 0,
  };

  handleChange = (event) => {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("clickty click");

    axios
      .post("http://localhost:4000/api/artworks/", {
        name: this.state.name,
        brand: this.state.brand,
        price: this.state.price,
        image: this.state.image,
      })
      .then((response) => {
        // this.setState({
        //   name: "",
        //   brand: "",
        //   price: 0,
        //   image: "",
        // });
        this.props.history.push("/guitars");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form method="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Brand</label>
          <input
            name="brand"
            value={this.state.brand}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            onChange={this.handleChange}
            value={this.state.price}
            name="price"
            type="number"
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
        <button>Submit</button>
      </form>
    );
  }
}

export default FormArt;
