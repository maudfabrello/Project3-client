import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import FormArt from "./components/Forms/FormArt"
import Gallery from "./pages/Gallery";
import OnePiece from "./pages/OnePiece";
import FormEditArtwork from "./components/Forms/FormEditArtwork";
import Purchased from "./pages/Purchased";
import History from "./pages/History";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/artworks/create" component={FormArt} />
        <Route exact path="/artworks/edit/:id" component={FormEditArtwork} />
        <Route exact path="/artworks" component={Gallery} />
        <Route exact path="/artworks/purchased" component={Purchased}/>
        <Route exact path="/artworks/history" component={History}/>
        <Route exact path="/artworks/:id" component={OnePiece} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
