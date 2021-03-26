import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  state = {
    gallery: [],
  };

  getAll() {
    axios
      .get("http://localhost:4000/api/artworks")
      .then((response) => {
        this.setState({ gallery: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getAll();
  }



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
