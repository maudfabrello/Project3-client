import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  state = {
    gallery: [],
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/artworks", {
        withCredentials: true,
      })
      .then((response) => {

        //NOT MUTATING THE STATE DIRECTLY
        this.setState({ gallery: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteArtwork = (id) => {
    console.log(id);
    // FOR FUTURE IMPLEMENTATION
    // const toDelete = confirm('Are you sure you want to delete?');
    // if (toDelete) {
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + `/api/artworks/${id}`)
      .then((res) => {
        console.log(res.data);
        const restOfTheArtworks = this.state.gallery.filter(
          (artwork) => artwork._id !== id
        );
        this.setState({ gallery: restOfTheArtworks });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h2 className="gallery-page-title">Art Gallery</h2>
        <div className="gallery-container-single-artpiece">
          {this.state.gallery.map((oneArtPiece) => {
            return (
              <div key={oneArtPiece._id} className="gallery-single-artpiece">
                <Link to={`/artworks/${oneArtPiece._id}`}>
                  <img src={oneArtPiece.pictureUrl} alt="" />
                </Link>
                <p className="gallery-art-title">{oneArtPiece.title}</p>
                {/* afficher le nom de l'auteur de l'oeuvre */}
                <p className="gallery-page-artist">
                  By {oneArtPiece.artistName}
                </p>
                <p>
                  <button className="button">
                    <Link to={`/artworks/${oneArtPiece._id}`}>Details</Link>
                  </button>

                  {/* <button className="button"> 
                 <Link to={`/artworks/edit/${oneArtPiece._id}`}>Update</Link>
                  </button>

                  <button className="button" onClick={() =>this.deleteArtwork(oneArtPiece._id)}>
                   Delete
                  </button> */}
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
