import React from "react";
import { Outlet } from "react-router-dom";
import {blob} from "../../assets/images"
import "./auth.css"

function Auth() {
  return (
    <div className="signup-container flex-row justify-center align-center">
      <div className="background-image-container">
        <img
          className="form-background-image blob-top-left"
          src={blob}
          alt="form-bg"
        />
        <img
          className="form-background-image blob-bottom-right"
          src={blob}
          alt="form-bg"
        />
      </div>
      <Outlet />
    </div>
  );
}

export { Auth };
