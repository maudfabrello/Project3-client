import React from "react";
import History from "./History"
import { withUser } from "../components/Auth/withUser";

const Profile = (props) => {
  const { context } = props;
  return (
    <div>
      <h2>Hello {context.user.firstName}!</h2>
  
      <div>
      <History/>
      </div>
    </div>
  );
};

export default withUser(Profile);
