import { useContext, useEffect, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-inputs";
import "./login.scss";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { reset } from "../../context/authContext/AuthActions";

export default function Login() {
  const { dispatch, error, isFetching } = useContext(AuthContext);

  useEffect(() => {
    return () => dispatch(reset());
  }, []);

  const {
    setInputValue: emailChangeHandler,
    inputValue: emailValue,
    onBlurHandler: emailBlurHandler,
    hasError: emailIsInvalid,
    reset: emailReset,
    inputClass: emailClass,
    valueIsValid: emailIsValid,
  } = useInput((input) => input.includes("@"), "formControl");

  const {
    setInputValue: passwordChangeHandler,
    inputValue: passwordValue,
    onBlurHandler: passwordBlurHandler,
    hasError: passwordIsInvalid,
    reset: passwordReset,
    inputClass: passwordClass,
    valueIsValid: passwordIsValid,
  } = useInput((input) => input.length >= 4, "formControl");

  const handleLogin = (e) => {
    e.preventDefault();
    emailBlurHandler();
    passwordBlurHandler();

    if (emailIsValid && passwordIsValid) {
      login({ email: emailValue, password: passwordValue }, dispatch);
      passwordReset();
    }
  };
  let errorComponent;

  if (error === "invalid email") {
    errorComponent = (
      <div className="error">
        Sorry, we can't find an account with this email address. Please try
        again or{" "}
        <Link className="link" to="/register">
          create a new account{" "}
        </Link>
        .
      </div>
    );
  } else if (error === "invalid password") {
    errorComponent = (
      <div className="error">
        <b>Incorrect password</b>. Please try again or you can reset your
        password.
      </div>
    );
  }

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
          {errorComponent}
          <div className={emailClass}>
            <input
              type="email"
              placeholder=" "
              onBlur={emailBlurHandler}
              value={emailValue}
              onChange={(e) => emailChangeHandler(e.target.value)}
            />
            <label htmlFor="email">Email or Phone Number</label>
            {emailIsInvalid && (
              <p>Please enter a valid email or phone number</p>
            )}
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
            {passwordIsInvalid && (
              <p>Your password must contain between 4 and 60 characters.</p>
            )}
          </div>
          <button className="loginButton" onClick={handleLogin}>
            {isFetching ? <LoadingSpinner /> : "Sign In"}
          </button>
          <div className="sideAction">
            <div className="checkboxInput">
              <input type="checkbox" name="" id="" />
              Remember me
            </div>
            <Link className="link" to="">
              Need help?
            </Link>
          </div>
          <div className="sideLogin">
            <img
              src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
              alt=""
            />
            <span>Login with Facebook</span>
          </div>
          <span>
            New to Netflix?{" "}
            <Link className="link" to="/register">
              Sign up now.
            </Link>
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
