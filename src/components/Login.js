import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInButton = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(email);
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
      >
        {isSignInForm ? (
          <h1 className="font-bold text-2xl">Sign In</h1>
        ) : (
          <h1 className="font-bold text-2xl">Sign Up</h1>
        )}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="py-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="py-4 my-4 w-full bg-gray-700 rounded-lg"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="py-4 my-4 w-full bg-gray-700 rounded-lg"
          ref={password}
        />
        <p className="text-red-500 p-2">{errorMessage}</p>
        <button
          className="bg-red-700 p-4 my-4 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h2 className="flex justify-center">OR</h2>
        {isSignInForm ? (
          <p onClick={toggleSignInButton}>New to Netflix? Sign Up now</p>
        ) : (
          <p onClick={toggleSignInButton}>Already a User? Sign In now</p>
        )}
        {/* <button className="bg-gray-400 my-2 mx-2">Use a sign-in code</button>
          <Link className="flex justify-center">Forget Password?</Link>
          <div className="flex flex-row my-2 mx-2">
            <input type="checkbox" />
            <h3>Remember me</h3>
          </div>
          <div className="flex flex-row my-2 mx-2">
            <h3>New to Netlix?</h3>
            <Link>Sign Up Now</Link>
          </div> */}
      </form>
    </div>
  );
};

export default Login;
