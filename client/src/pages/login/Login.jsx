import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-inputs";
import "./login.scss";

export default function Login() {
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const {
    setInputValue: emailChangeHandler,
    inputValue: emailValue,
    onBlurHandler: emailBlurHandler,
    hasError: emailIsInvalid,
    reset: emailReset,
    inputClass: emailClass,
  } = useInput((input) => input.includes("@"), "formControl");

  const {
    setInputValue: passwordChangeHandler,
    inputValue: passwordValue,
    onBlurHandler: passwordBlurHandler,
    hasError: passwordIsInvalid,
    reset: passwordReset,
    inputClass: passwordClass,
  } = useInput((input) => input.length >= 4 && input.length <= 60, "formControl");

  const handleLogin = (e) => {
    e.preventDefault();
    emailReset();
    login({ email: emailValue, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <div className={emailClass}>
            <input
              type="email"
              placeholder=" "
              onBlur={emailBlurHandler}
              value={emailValue}
              onChange={(e) => emailChangeHandler(e.target.value)}
            />
            <label htmlFor="email">Email or Phone Number</label>
            {emailIsInvalid && <p>Please enter a valid email or phone number</p>}
          </div>
          <div className={passwordClass}>
            <input
              type="password"
              placeholder=" "
              onBlur={passwordBlurHandler}
              value={passwordValue}
              onChange={(e) => passwordChangeHandler(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            {passwordIsInvalid && <p>Your password must contain between 4 and 60 characters.</p>}
          </div>
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <div className="sideAction">
            <div className="checkboxInput">
              <input type="checkbox" name="" id="" />Remember me
            </div>
            <Link className="link" to="">Need help?</Link>
          </div>
          <div className="sideLogin">
            <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="" />
            <span>Login with Facebook</span>
          </div>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
