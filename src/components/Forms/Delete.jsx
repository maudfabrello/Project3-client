import axios from "axios";
import React, { Component } from "react";

class Delete extends Component {
  state = {
    artistName: "",
    pictureUrl: null,
    title: "",
    description: "",
    larg: 0,
    lng: 0,
    price: 0,
    };

  deleteItem = (itemId) => {
    apiHandler.removeItem(itemId).then(() => {
      const Artworks = [...this.state.Artworks].filter(
        (artwork) => art.work_id !== artworkId
      );
      this.setState({ Artworks });
    });
  };


  deleteItem = (itemId) => {
    axios
      .delete("http://localhost:4000/api/artworks/", {
        artistName: this.state.artistName
  }
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
          
        
        })
         .catch((error) => {
           console.log(error);
         })
  }
   
  render() {
    return (
    )
};

export default Delete;
