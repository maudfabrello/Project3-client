import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { withUser } from "./withUser";

function compareIds(creator, userId) {
  let isCreator = false;
  console.log("FROM HIDDEN BUTTONS userId :", userId);
  console.log("FROM HIDDEN BUTTONS creator :", creator);

  if (userId === creator) {
    console.log("As you see ^ , They are the same");
    return true;
  } else {
    console.log("They are not the same");
    return false;
  }
}

const deleteArtwork = (id) => {
  console.log("ID FROM DELETE:", id);
  console.log("Deleting...");

  axios
    .delete(process.env.REACT_APP_BACKEND_URL + `/api/artworks/${id}`)
    .then((res) => {
      console.log("FROM DELETE PROPS :", this.props);
      this.props.history.push("/profile");
    })
    .catch((error) => {
      console.log(error);
    });
};

// const propsId = this.props.id;

const HiddenButtons = (props) => {
  const { context } = props;

  console.log("HIDDEN BUTTON PROPS", props);
  let isCreator;
  if (props.context.user) {
    isCreator = compareIds(props.creator, props.context.user._id);
  }

  console.log("context.user :", context.user);

  return (
    <div>
      <React.Fragment>
        {isCreator && (
          <div>
            <p>You put this item for sale.</p>

            <button className="button">
              <Link to={`/artworks/edit/${props.id}`}>Edit</Link>
            </button>
            <button className="button" onClick={() => deleteArtwork(props.id)}>
              Delete
            </button>
          </div>
        )}
        {!isCreator && (
          <p>Another user put this item for sale. Consider buying it!</p>
        )}
      </React.Fragment>
    </div>
  );
};

export default withRouter(withUser(HiddenButtons));
