// import axios from "axios";
// import React, { Component } from "react";

// class Delete extends Component {
//   state = {
//     artistName: "",
//     pictureUrl: null,
//     title: "",
//     description: "",
//     larg: 0,
//     lng: 0,
//     price: 0,
  
//   };


// deleteArtwork = id => {
//   // const toDelete = confirm('Are you sure you want to delete?');
//   // if (toDelete) {
//     axios
//       .delete(`http://localhost:4000/api/artworks/${id}`)
//       .then(response => {
//         alert(response.data);
//       })
//       .catch(err => console.log(`Err while deleting character: ${err}`));
//   // }
// };

// deleteItem = (itemId) => {
//   apiHandler.removeItem(itemId).then(() => {
//     const userItems = [...this.state.userItems].filter(
//       (item) => item._id !== itemId
//     );
//     this.setState({ userItems });
//   });
// };



//   //  handleDelete = (event) => {
//   //   event.preventDefault();
//   //   console.log("handle delete is working");
   
// //     const toDelete = confirm('Are you sure you want to delete?');
// //     if (toDelete) {
// //     axios
// //       .delete("http://localhost:4000/api/artworks/${id}")
// //       .then((response) => {
// //         alert("Delete successful");
// //          });
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };

// //   render() {
// //     return (
// //           );
// //   }
// // }

// export default Delete;
