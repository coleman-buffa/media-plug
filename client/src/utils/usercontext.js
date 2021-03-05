import React from "react";

const UserContext = React.createContext({
  username: "",
  email: "",
  authenticated: false,
  handleSignupBtnClick: () => {},
  handleLoginBtnClick: () => {}
});

export default UserContext;

