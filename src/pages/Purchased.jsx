import React from "react";
import { NavLink } from "react-router-dom";

const Purchased = () => {
  return (
    <div>
      <h1>Thank you for your purchase !</h1>

      <p>
        <NavLink to="/profile">Back to your profile</NavLink>
      </p>

      <p>
        <NavLink exact to="/artworks">
          <h3 className="gallery">See the Gallery</h3>
        </NavLink>
      </p>
    </div>
  );
};

export default Purchased;
