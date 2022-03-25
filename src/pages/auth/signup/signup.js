import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupImage } from "../../../assets/images";
import { AuthContainer } from "../components/authContainer";
import {
  BsFillEyeFill,
  FaEnvelope,
  AiOutlineArrowRight,
} from "../../../assets/icons";
import { useAuth } from "../../../context/auth/authContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const handleOnChange = (e) => {
    setFormData({...formData ,[e.target.id] : e.target.value});
  };
  return (
    <AuthContainer title="Signup" imageUrl={signupImage}>
      <form className="signup-form-container flex-col">
        <ul>
          <li className="list-style-none text-xs">
            <div className="email-field-container">
              <label className="text-xs" htmlFor="firstName">
                First name
              </label>
              <input
                id="firstName"
                className="input-field form-control text-xs"
                type="text"
                placeholder="priya"
                value={formData.firstName}
                onChange={
                  handleOnChange
                }
                required
              />
            </div>
          </li>
          <li className="list-style-none text-xs">
            <div className="email-field-container">
              <label className="text-xs" htmlFor="lastName">
                Last name
              </label>
              <input
                id="lastName"
                className="input-field form-control text-xs"
                type="text"
                placeholder="patel"
                value={formData.lastName}
                onChange={
                  handleOnChange
                }
                required
              />
            </div>
          </li>
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
                value={formData.email}
                onChange={
                  handleOnChange
                }
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
                value={formData.password}
                onChange={
                  handleOnChange
                }
                required
              />
              <BsFillEyeFill className="password-eye-icon text-xs"></BsFillEyeFill>
            </div>
          </li>
        </ul>
        <button
          className="button primary-button-pink my-2 text-xs"
          onClick={(e) => {
            e.preventDefault();
            signup(formData);
          }}
        >
          Create New Account
        </button>
        <div>
          <Link to="/auth/login" className="text-xs">
            Already have an account
            <span>
              <AiOutlineArrowRight className="ml-2"></AiOutlineArrowRight>
            </span>
          </Link>
        </div>
      </form>
    </AuthContainer>
  );
};

export { Signup };
