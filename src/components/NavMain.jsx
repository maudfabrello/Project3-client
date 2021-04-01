import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;
  console.log("PROPS" ,props);

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <img className="logo-nav" src="https://res.cloudinary.com/dyhiaws3n/image/upload/v1617196271/logo-art-for-all_p07xa6.png" alt="art for all logo"></img>
      </NavLink>
      <NavLink exact to="/">
        <h3 className="gallery">Home</h3>
      </NavLink>
      <NavLink exact to="/artworks">
        <h3 className="gallery">Gallery</h3>
      </NavLink>

      
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/profile"> 
                {context.user && context.user.email}
              </NavLink>
            </li>
            <li>
              <p onClick={handleLogout}>Logout</p>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <h3><NavLink to="/signin">Log in</NavLink></h3>
            </li>
            <li>
            <h3><NavLink to="/signup">Create account</NavLink></h3>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
