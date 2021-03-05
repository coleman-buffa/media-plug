import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import UserContext from "./utils/usercontext";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Challenges from "./pages/Challenges";
import NoMatch from "./pages/NoMatch";


import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"

function App() {
  const [user, setUser] = useState({});

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignupBtnClick = e => {
    setRegisterUsername(e.target.value);
  }

  const handleLoginBtnClick = e => {

  }


  return (
    <div>
      <UserContext.Provider value={{ user, setUser, registerUsername, setRegisterUsername, registerPassword, setRegisterPassword, loginUsername, setLoginUsername, loginPassword, setLoginPassword, handleSignupBtnClick, handleLoginBtnClick }}>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/challenges" component={Challenges} />
            <Route path="/*" component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
