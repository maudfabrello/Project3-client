import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  state = {
    gallery: [],
  };

  // getAll() {
  // }

  componentDidMount() {
    // this.getAll();
    axios
      .get("http://localhost:4000/api/artworks")
      .then((response) => {
        this.setState({ gallery: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteArtwork = id => {
    console.log(id);
    // const toDelete = confirm('Are you sure you want to delete?');
    // if (toDelete) {
      axios
        .delete(`http://localhost:4000/api/artworks/${id}`)
        .then((res) => {
          console.log(res.data)
          const restOfTheArtworks = this.state.gallery.filter(
            (artwork) => artwork._id !== id
          );
          this.setState({ gallery: restOfTheArtworks });
          // res.data
        })
        .catch((error) => {
          console.log(error);
        });
     
       
          
          


        // .catch(err => console.log(`Err while deleting character: ${err}`));
    // }
  };

  // deleteItem = (itemId) => {
  //   apiHandler.removeItem(itemId).then(() => {
  //     const userItems = [...this.state.userItems].filter(
  //       (item) => item._id !== itemId
  //     );
  //     this.setState({ userItems });
  //   });
  // };

  render() {
    return (
      <div>
        <p>Art Gallery</p>
        <div>
          {this.state.gallery.map((oneArtPiece) => {
            return (
              <div>
                <p>{oneArtPiece.title}</p>
                {/* afficher le nom de l'auteur de l'oeuvre */}
                <p>
                  <Link to={`/artworks/${oneArtPiece._id}`}>
                    <img src={oneArtPiece.pictureUrl} alt="" />
                  </Link>
                </p>
                <p>
                  <button>
                    <Link to={`/artworks/${oneArtPiece._id}`}>See more</Link>
                  </button>
                  <button  onClick={() =>this.deleteArtwork(oneArtPiece._id)}>
                   Delete
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;
