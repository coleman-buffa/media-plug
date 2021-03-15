import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Challenges from "./pages/Challenges";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Loading from "./components/loading/loading";
import ProtectedRoute from "./components/protectedroute/protectedroute";

function App() {
  // const [user, setUser] = useState({});

  // const [registerUsername, setRegisterUsername] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginUsername, setLoginUsername] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/explore" component={Explore} />
          <ProtectedRoute path="/challenges" component={Challenges} />
          <ProtectedRoute path="/search" component={Search} />
          <Route path="/*" component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
