import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class GalleryList extends React.Component {
  state = {
    gallery: [],
  };

  getAll() {
    axios
      .get("http://localhost:3000/api/your-project-3")
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

  handleDelete = (id) => {
    // axios stuff overhere
    // then you get the reponse
    // meaning it got deleted
    //this.getAll();
  };

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
                <img src={oneArtPiece.pictureUrl} alt="" />
                <Link to={`/artwork/${oneArtPiece._id}/edit`}>See more</Link>
                {/* <button>Details</button> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GalleryList;