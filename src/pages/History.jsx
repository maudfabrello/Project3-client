import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";

class History extends Component {
  state = {
    purchasedArts: [],
    createdArts: [],
  };

  // constructor(props) {
  //   super(props);
  //   const { context } = this.props;
  //   console.log(this.props);

  // this.state = {
  //   purchasedArts: [],
  // createdArts: [],
  // };
  //}

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/myhistory/purchasedArt", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ purchasedArts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/api/myhistory/createdArt", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ createdArts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteArtwork = (id) => {
    console.log(id);
    // const toDelete = confirm('Are you sure you want to delete?');
    // if (toDelete) {
    axios
      .delete(`http://localhost:4000/api/artworks/${id}`)
      .then((res) => {
        console.log(res.data);
        const restOfTheArtworks = this.state.createdArts.filter(
          (artwork) => artwork._id !== id
        );
        this.setState({ createdArts: restOfTheArtworks });
        // res.data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props.context);
    // return <div></div>
    return (
      <div>
        <section>
          <button className="button">
            <Link to={"/artworks/create"}>Create</Link>
          </button>

          <div>
            <h1>PURCHASED ARTS</h1>{" "}
            {this.state.purchasedArts.map((oneArtPiece) => {
              return (
                <div>
                  <p> {oneArtPiece.purchasedArt[0].title}</p>
                </div>
              );
            })}
          </div>
          <div>
            <h1>CREATED ARTS</h1>{" "}
            {this.state.createdArts.map((oneArt) => {
              return (
                <div>
                  <p>{oneArt.title}</p>

                  <button className="button">
                    <Link to={`/artworks/edit/${oneArt._id}`}>Edit</Link>
                  </button>

                  <button
                    className="button"
                    onClick={() => this.deleteArtwork(oneArt._id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default withUser(History);
