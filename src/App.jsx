import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import FormArt from "./components/Forms/FormArt";
import Gallery from "./pages/Gallery";
import OnePiece from "./pages/OnePiece";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/artworks/create" component={FormArt} />
        <Route exact path="/artworks/" component={Gallery} />
        <Route exact path="/artworks/${oneArtPiece._id}" component={OnePiece} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
