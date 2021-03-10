import React from "react";
import "./loading.css";
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

function Loading() {
  return(
    <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
  );
}

export default Loading;