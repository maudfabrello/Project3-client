import React, { Component } from "react";

class History extends Component {
  state = {
    purchasedArts: [],
    createdArts: [],
  };

  componentDidMount() {
    // this.getAll();
    axios
      .get("http://localhost:4000/api/my-history/purchasedArt")
      .then((response) => {
        this.setState({ purchasedArts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/api/my-history/createdArt")
      .then((response) => {
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
        const restOfTheArtworks = this.state.gallery.filter(
          (artwork) => artwork._id !== id
        );
        this.setState({ gallery: restOfTheArtworks });
        // res.data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div> USER NAME AND EMAIL</div>
        <div>
          {" "}
          {/* key */}
          {this.state.purchasedArts.map((oneArtPiece) => {
            return <div>PURCHASED ARTS</div>;
          })}
        </div>
        <div>
          {" "}
          {this.state.createdArts.map((oneArt) => {
            return (
              <div>
                CREATED ARTS
                <p>{oneArt.title}</p>
                <button
                  className="button"
                  onClick={() => this.deleteArtwork(oneArt._id)}
                >
                  Delete
                </button>

                <button className="button">
                    <Link to={`/artworks/edit/${oneArt._id}`}>Update</Link>
                  </button>
                
    
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default History;
