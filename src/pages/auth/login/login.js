import React, { useState } from "react";
import {
  Link,
  useNavigate,
  useLocation,
  AuthContainer,
  signin,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  FaEnvelope,
  AiOutlineArrowRight,
  useAuth,
  toast
} from "../index";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    const success = await login({ email, password });
    if (success) {
      if (pathname === "/signup") {
        navigate("/");
      } else {
        navigate(-1);
      }
      toast.success("Login successful");
    } else {
      toast.error("Entered wrong credentials");
    }
  };
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
                value={formData.email}
                onChange={handleOnChange}
                required
              />
              <FaEnvelope className="email-icon text-xs" />
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
                type={showPassword ? "text" : "password"}
                placeholder="•••••••••"
                value={formData.password}
                onChange={handleOnChange}
                required
              />
              {showPassword ? (
                <BsFillEyeFill
                  className="password-eye-icon text-xs"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                ></BsFillEyeFill>
              ) : (
                <BsFillEyeSlashFill
                  className="password-eye-icon text-xs"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                ></BsFillEyeSlashFill>
              )}
            </div>
          </li>
          <li className="list-style-none">
            <div className="flex-row align-center justify-between mt-1">
              <div className="flex-row align-center my-2">
                <input type="checkbox" id="terms" onChange={handleOnChange} />
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
          onClick={(e) => loginHandler(e, formData.email, formData.password)}
        >
          Login
        </button>
        <button
          className="button primary-button-pink mb-2 text-xs"
          onClick={(e) => loginHandler(e, "priya@gmail.com", "priya123")}
        >
          Login As Guest
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
