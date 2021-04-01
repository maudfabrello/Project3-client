import React from "react";
import { Link } from "react-router-dom";
import { withUser } from "./withUser";

function compareIds(creator, userId) {
  let isCreator = false;
  if (userId === creator._id) {
    console.log("They are the same");
    return true;
  } else {
    console.log("They are not the same");
    return false;
  }
}

const HiddenButtons = (props) => {
  const { context } = props;
  // console.log("HIDDEN BUTTON PROPS", props);
  let isCreator;
  if (props.context.user) {
    isCreator = compareIds(props.creator, props.context.user._id);
  }

  console.log("context.user :", context.user);

  return (
    <div>
      <React.Fragment>
        {isCreator && <h1>BOUTON IS CREATOR OK</h1>}
        {!isCreator && <h1>BOUTON IS NOT CREATOR</h1>}

        {/* {isCreator && (
            <Link
      
              to={`/artworks/${artwork._id}/edit`}
            >
              Edit
            </Link>
          )}
          {isCreator && (
            <Link
            
              to={`/artworks/${artwork._id}/delete`}
            >
              Delete
            </Link>
          )} */}
      </React.Fragment>
    </div>
  );
};

export default withUser(HiddenButtons);
