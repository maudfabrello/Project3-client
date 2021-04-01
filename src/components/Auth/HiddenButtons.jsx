// import React from "react";
// import { Link } from "react-router-dom";
// import { withUser } from "./withUser";

// deleteArtwork = (id) => {
//   console.log(id);
//   axios
//     .delete(`http://localhost:4000/api/artworks/${id}`)
//     .then((res) => {
//       this.props.history.push("profile");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

function compareIds(creator, userId) {
  let isCreator = false;
  console.log("FROM HIDDEN BUTTONS userId :", userId);
  console.log("FROM HIDDEN BUTTONS creator :", creator);

  if (userId === creator) {
    console.log("They are the same");
    return true;
  } else {
    console.log("They are not the same");
    return false;
  }
}

// const HiddenButtons = (props) => {
//   const { context } = props;
//   // console.log("HIDDEN BUTTON PROPS", props);
//   let isCreator;
//   if (props.context.user) {
//     isCreator = compareIds(props.creator, props.context.user._id);
//   }

//   console.log("context.user :", context.user);

  return (
    <div>
      <React.Fragment>
        {isCreator && (
          <div>
            <h1>IS CREATOR INDEED </h1>

            <button className="button">
              <Link to={`/artworks/edit/${props.id}`}>Edit</Link>
            </button>
            <button
              className="button"
              onClick={() => this.deleteArtwork(props.id)}
            >
              Delete
            </button>
          </div>
        )}

        {!isCreator && <h1>IS NOT CREATOR</h1>}
      </React.Fragment>
    </div>
  );
// };

// export default withUser(HiddenButtons);
