import React from "react";
import { NavLink } from "react-router-dom";

const Purchased = () => {
  return (
    <div className="buy-confirmation-container">
      <h1>Thank you!</h1>
      <p>We appreciate your purchase.</p>
      <p>The artist will be in touch soon with shipping details.</p>

      {/* <h3>
        <NavLink to="/profile">Back to your profile</NavLink>
      </h3> */}

      <p>
        <NavLink exact to="/profile">
          <h3>Back to your profile</h3>
        </NavLink>
    
        <NavLink exact to="/artworks">
          <h3>See the Gallery</h3>
        </NavLink>
      </p>
    </div>
  );
};

export default Purchased;
