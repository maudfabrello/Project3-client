import React from "react";
import axios from "axios";
// import { withUser } from "../components/Auth/withUser";
import { withRouter } from "react-router-dom";
// import Delete from "../components/Forms/Delete";
// import { Link } from "react-router-dom";

class OnePiece extends React.Component {

  // constructor(props) {
  //   super(props);
  //   const { context } = props;

    // this.state = {
    //   // allContacts: contactsFromJSON,
    //   artwork: null,
    // };
    state = {
      artwork: null,
  
    };
  // };
  

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/api/artworks/${id}`)
      .then((response) => {
        this.setState({ artwork: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick = (event) => {
    console.log("click");
    console.log(event);
    // let buyer = this.context.user._id;
    let id = this.props.match.params.id;
    console.log(id)
    axios
      .post(`http://localhost:4000/api/onepiece/${id}`, { withCredentials: true })
      .then((response) => {
         
        this.props.history.push("api/artworks");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ message: error.response.data.message });
      });

  }

 

  render() {
    if (this.state.artwork === null) {
      return <div>Loading...</div>;
    }

    return (
      <div className="single-container-single-artpiece">
        <div className="single-artpiece-child">
          <img
            src={this.state.artwork.pictureUrl}
            alt={this.state.artwork.title}
          />
        <h2>{this.state.artwork.title}</h2>
        <p>By {this.state.artwork.artistName}</p>
                <p>{this.state.artwork.description}</p>
        <p>
          Dimensions: {this.state.artwork.dimensions[0]} x
          {this.state.artwork.dimensions[1]}
        </p>
        <p>{this.state.artwork.price} €</p>
        {/* TO BE CREATED */}
        <button className="button" onClick={this.handleClick}>
          {/* <Link onClick={this.handleClick}to={`/artworks/${this.state.artwork._id}/buy`}>Buy</Link> */}
BUY
        </button>
        {/* <Button handleClick={(event) => handleDelete(_id)} secondary>
            Delete
          </Button>
          <Button handleClick={(event) => handleEdit(_id)} primary>
            Edit
          </Button> */}


{/* IF CONNECTED */}
        {/* <Delete /> */}

        </div>
      </div>
    );
  }
}
export default withRouter(OnePiece);

