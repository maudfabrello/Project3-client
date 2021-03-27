import React from "react";
import axios from "axios";
import Delete from "../components/Forms/Delete";
import { Link } from "react-router-dom";

class OnePiece extends React.Component {
  state = {
    artwork: null,
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/api/artworks/${id}`)
      .then((response) => {
        this.setState({ artwork: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // handleDelete = (id) => {
  // axios stuff overhere
  // then you get the reponse
  // meaning it got deleted
  // this.getAll();
  // };

  deleteArtwork = id => {
    // const toDelete = confirm('Are you sure you want to delete?');
    // if (toDelete) {
      axios
        .delete(`http://localhost:4000/api/artworks/${id}`)
        .then(response => {
          alert(response.data);
        })
        .catch(err => console.log(`Err while deleting character: ${err}`));
    // }
  };

  render() {
    if (this.state.artwork === null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{this.state.artwork.title}</h2>
        <p>By {this.state.artwork.artistName}</p>
        <p>
          <img
            src={this.state.artwork.pictureUrl}
            alt={this.state.artwork.title}
          />
        </p>
        <p>{this.state.artwork.description}</p>
        <p>
          Dimensions: {this.state.artwork.dimensions[0]} x
          {this.state.artwork.dimensions[1]}
        </p>
        <p>{this.state.artwork.price} €</p>
        {/* TO BE CREATED */}
        <button>
          <Link to={`/artworks/${this.state.artwork._id}/buy`}>Buy</Link>
        </button>
        {/* <Button handleClick={(event) => handleDelete(_id)} secondary>
            Delete
          </Button>
          <Button handleClick={(event) => handleEdit(_id)} primary>
            Edit
          </Button> */}


{/* IF CONNECTED */}
        <Delete />


      </div>
    );
  }
}

export default OnePiece;
