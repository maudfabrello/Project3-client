import React from "react";

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // allContacts: contactsFromJSON,
      artworks: []
    };
  }

  render() {
    return (
      <div>
        <h1>Home Page ∆</h1>
       
        <div>ARTWORKS</div>
      </div>


    );
  }
}

export default Home;
