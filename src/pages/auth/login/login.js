import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContainer } from "../components/authContainer";
import { signin } from "../../../assets/images";
import {
  BsFillEyeFill,
  FaEnvelope,
  AiOutlineArrowRight,
} from "../../../assets/icons";
import { useAuth } from "../../../context/auth/authContext";

const Login = () => {
  const [email, setEmail] = useState();
  const { login } = useAuth();
  const [password, setPassword] = useState();
  return (
    <AuthContainer title="Login" imageUrl={signin}>
      <form className="signup-form-container flex-col">
        <ul>
          <li className="list-style-none text-xs">
            <div className="email-field-container">
              <label className="text-xs" htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                className="input-field form-control text-xs"
                type="email"
                placeholder="priya@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <FaEnvelope className="email-icon text-xs"></FaEnvelope>
            </div>
          </li>
          <li className="list-style-none">
            <div className="password-field-container">
              <label className="text-xs" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="input-field form-control text-xs"
                type="password"
                placeholder="•••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <BsFillEyeFill className="password-eye-icon text-xs"></BsFillEyeFill>
            </div>
          </li>
          <li className="list-style-none">
            <div className="flex-row align-center justify-between mt-1">
              <div className="flex-row align-center my-2">
                <input className="" type="checkbox" id="terms" />
                <label className="text-xs ml-1" htmlFor="terms">
                  Remember me
                </label>
              </div>

              <div className="flex-row forget-password align-center">
                <Link to="/forgotPassword" className="text-xs">
                  Forget Password
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <button
          className="button primary-button-pink my-2 text-xs"
          onClick={(e) => {
            e.preventDefault();
            login({ email, password });
          }}
        >
          Login
        </button>
        <div>
          <Link to="/auth/signup" className="text-xs">
            Create New Account
            <span>
              <AiOutlineArrowRight className="ml-2"></AiOutlineArrowRight>
            </span>
          </Link>
        </div>
      </form>
    </AuthContainer>
  );
};

export { Login };
