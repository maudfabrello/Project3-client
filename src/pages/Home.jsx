import React from "react";
import { Link } from "react-router-dom";
// Import OnePiece ?

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page ∆</h1>
        <p>Hello from Mackenzie</p>
        <p>Bonjour from Paul</p>
        <p>heyhey from maud</p>
        <p>COUCOU</p>
        <p>
        <Link to="/artworks">See the full gallery</Link>
        </p>
        
   
      </div>
    );
  }
}

export default Home;
