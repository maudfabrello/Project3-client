import React from "react";
import axios from "axios";
// import { withUser } from "../components/Auth/withUser";
import { withRouter } from "react-router-dom";
import HiddenButtons from "../components/Auth/HiddenButtons";
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
      .get(process.env.REACT_APP_BACKEND_URL + `/api/artworks/${id}`)
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
    console.log(id);
    axios
      .post(process.env.REACT_APP_BACKEND_URL +
        `/api/onepiece/${id}`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        this.props.history.push("/artworks/purchased");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ message: error.response.data.message });
      });
  };

  render() {
    console.log("FROM ONEPIECE this.state.artwork :", this.state.artwork);

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
          <h2 className="single-page-title">{this.state.artwork.title}</h2>
          <p className="single-page-artist">
            By {this.state.artwork.artistName}
          </p>
          <p className="single-page-description">{this.state.artwork.description}</p>
          <p className="single-page-description">
            Dimensions: {this.state.artwork.dimensions[0]} x
            {this.state.artwork.dimensions[1]}
          </p>
          <p className="single-page-description">{this.state.artwork.price} €</p>

          {/* TO BE CREATED */}
          <button className="one-piece-buy-button" onClick={this.handleClick}>
            {/* <Link onClick={this.handleClick}to={`/artworks/${this.state.artwork._id}/buy`}>Buy</Link> */}
            BUY
          </button>
          {/* A REMETTRE :   */}
          <HiddenButtons creator={this.state.artwork.creator} id={this.state.artwork._id} />

          {/* IF CONNECTED */}
          {/* <Delete /> */}
        </div>
      </div>
    );
  }
}
export default withRouter(OnePiece);
