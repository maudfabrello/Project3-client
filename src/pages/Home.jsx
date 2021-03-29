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

  // addRandomContact() {
  //   // console.log("random clicked"); Always look if  you event handler works before any logic ;)
  //   let randomIndex = Math.floor(contactsFromJSON.length * Math.random()); // random number between 0 and contactsFromJSON.length (excluded)
  //   let randomContact = contactsFromJSON[randomIndex];

  //   // Method 1
  //   // Create a copy of this.state.firstVisibleContacts
  //   let newList = [...this.state.firstVisibleContacts];
  //   // push or unshift in the copy you just created
  //   newList.unshift(randomContact);
  //   // save it in the state
  //   this.setState({
  //     firstVisibleContacts: newList,
  //   });

  //   // Method 2
  //   // this.setState({
  //   //   firstVisibleContacts: [...this.state.firstVisibleContacts, randomContact]
  //   // })
  // }


  randomizeArtwork(array) {
    let randomIndex = Math.floor(array.length * Math.random());
    let randomArtwork = array[randomIndex];
    return randomArtwork;
    // console.log("RANDOMARTWORK");
    // console.log(randomArtwork);
  }

  render() {
    return (
      <div>
        <h1>Home Page ∆</h1>

        <div>RANDOM ARTWORK</div>
        <div>
          {
          randomizeArtwork(this.state.gallery);
          }
          
        {/* <img src={randomArtwork.pictureUrl} alt={randomArtwork.title} /> */}
        



          {  this.state.gallery.map((oneArtPiece) => {
            return (
              <div>
                <p>
                  <img src={oneArtPiece.pictureUrl} alt={oneArtPiece.title} />
                </p>
              </div>
            );
          })}{" "}
        </div>
      </div>
    );
  }
}

export default Home;
