import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
   

    this.state = {
      // allContacts: contactsFromJSON,
      gallery: [],
    };
  }

  componentDidMount() {
    // this.getAll();
    axios
      .get("http://localhost:4000/api/artworks")
      .then((response) => {
        this.setState({ gallery: response.data });
        console.log("THIS.STATE.GALLERY:");
        console.log(this.state.gallery);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  randomizeArtwork(array) {
    let randomIndex = Math.floor(array.length * Math.random());
    console.log("randomIndex:");
    console.log(randomIndex);
    let randomArtwork = array[randomIndex];
    console.log("randomArtwork :");
    console.log(randomArtwork);
    // TO MAKE SURE COMPONENTDIDMOUNT DID PASS
    if (randomArtwork) {
      console.log(randomArtwork.pictureUrl);
    }
    // console.log(randomArtwork.pictureUrl);
    return randomArtwork;
  }

  render() {
    console.log("STATE :", this.state);
    let randomPiece = this.randomizeArtwork(this.state.gallery);
    console.log("this.state.gallery");
    console.log(this.state.gallery);
    console.log("randomPiece :");
    console.log(randomPiece);
    // console.log("randomArtwork :");
    // console.log(randomArtwork);

    return (
      <div>
        <h1>Art 4 All</h1>

        <div>Random artwork :</div>
        <div>
          {
            // GUARD OPERATOR :
            randomPiece && (
              //
              <img src={randomPiece.pictureUrl} alt={randomPiece.title} />
            )
          }
          <Link to={`/artworks`}>Check the whole Gallery!</Link>
        </div>
      </div>
    );
  }
}

export default Home;
