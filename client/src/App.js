import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Challenges from "./pages/Challenges";
import NoMatch from "./pages/NoMatch";


import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/challenges" component={Challenges} />
          <Route path="/*" component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
