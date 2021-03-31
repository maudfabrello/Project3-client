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
<<<<<<< HEAD
      .get("http://localhost:4000/api/artworks", { withCredentials: true })
=======
      .get(process.env.REACT_APP_BACKEND_URL + "/api/artworks",{ withCredentials: true })
>>>>>>> 2412b1f70e996d072c619b59c7db6fdd12978349
      .then((response) => {
        this.setState({ gallery: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteArtwork = (id) => {
    console.log(id);
    // const toDelete = confirm('Are you sure you want to delete?');
    // if (toDelete) {
<<<<<<< HEAD
    axios
      .delete(`http://localhost:4000/api/artworks/${id}`)
      .then((res) => {
        console.log(res.data);
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
=======
      axios
        .delete(process.env.REACT_APP_BACKEND_URL +`/api/artworks/${id}`)
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
>>>>>>> 2412b1f70e996d072c619b59c7db6fdd12978349
    // }
  };

  render() {
    return (
      <div>
        <p>Art Gallery</p>
        <div className="gallery-container-single-artpiece">
          {this.state.gallery.map((oneArtPiece) => {
            return (
              <div className="gallery-single-artpiece">
                <p>
                  <Link to={`/artworks/${oneArtPiece._id}`}>
                    <img src={oneArtPiece.pictureUrl} alt="" />
                  </Link>
                </p>
                <p className="gallery-page-title">{oneArtPiece.title}</p>
                {/* afficher le nom de l'auteur de l'oeuvre */}
                <p className="gallery-page-artist">
                  By {oneArtPiece.artistName}
                </p>
                <p>
                  <button className="button">
                    <Link to={`/artworks/${oneArtPiece._id}`}>See more</Link>
                  </button>
<<<<<<< HEAD
                  <p></p>
                  <button className="button">
                    <Link to={`/artworks/edit/${oneArtPiece._id}`}>Edit</Link>
                  </button>
                  <button
                    className="button"
                    onClick={() => this.deleteArtwork(oneArtPiece._id)} >
                    Delete
                  </button>
=======
                  
                  {/* <button className="button"> 
                 <Link to={`/artworks/edit/${oneArtPiece._id}`}>Update</Link>
                  </button>

                  <button className="button" onClick={() =>this.deleteArtwork(oneArtPiece._id)}>
                   Delete
                  </button> */}

>>>>>>> 2412b1f70e996d072c619b59c7db6fdd12978349
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
