import React from "react";
import History from "./History"

const Profile = (props) => {
  return (
    <div>
      <h1>Protected profile</h1>
      <div>
      <History/>
      </div>
    </div>
  );
};

export default Profile;
