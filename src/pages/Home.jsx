import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Slideshow from "../components/Slideshow";

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
      .get(process.env.REACT_APP_BACKEND_URL + "/api/artworks")
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
      <div className="home-page-container">
        <div className="home-page-child">
              {/* <Slideshow /> */}
        <h2>About Art for All</h2>
        <br></br>
        <p className="art-share-text"> Art is a passion that everyone should share.</p>       
          <br></br> 
          <p>At Art for All, our goal is to make that possible. New and experienced artists alike are invited to showcase their art here, at prices that the average art-lover can afford.
        </p>
        <br></br>
        <button className="home-page-button"><Link to={`/artworks`}>GALLERY</Link></button>
        {/* <p>Browse<Link to={`/artworks`}>our gallery</Link>and find a new piece to love.</p> */}
        </div>
        <div className="home-page-child">
        <h2>We recommend</h2>
        <div>
          {
            // GUARD OPERATOR :
            randomPiece && (
              //
              

              <Link to={"/artworks"}>
                    <img src={randomPiece.pictureUrl} alt={randomPiece.title} />
                  </Link>
              
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
