import React from "react";

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // allContacts: contactsFromJSON,
      gallery: []
    };
  }

  componentDidMount() {
    // this.getAll();
    axios
      .get("http://localhost:4000/api/artworks")
      .then((response) => {
        this.setState({ gallery: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addRandomContact() {
    // console.log("random clicked"); Always look if  you event handler works before any logic ;)
    let randomIndex = Math.floor(contactsFromJSON.length * Math.random()); // random number between 0 and contactsFromJSON.length (excluded)
    let randomContact = contactsFromJSON[randomIndex];

    // Method 1
    // Create a copy of this.state.firstVisibleContacts
    let newList = [...this.state.firstVisibleContacts];
    // push or unshift in the copy you just created
    newList.unshift(randomContact);
    // save it in the state
    this.setState({
      firstVisibleContacts: newList,
    });

    // Method 2
    // this.setState({
    //   firstVisibleContacts: [...this.state.firstVisibleContacts, randomContact]
    // })
  }

  render() {
    return (
      <div>
        <h1>Home Page ∆</h1>
       
        <div>ARTWORKS</div>
        <div>{this.state.gallery.map((oneArtPiece) => {


            return (
              <div>
                <p>{oneArtPiece.pictureUrl}</p></div>
         ) }) } </div>

       </div>
    );
  }
}

export default Home;
