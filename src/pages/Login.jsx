import React from "react";
import { useState, useEffect, useRef } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TiInfoOutline } from "react-icons/ti";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);
  const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", { username, password });
    // Implement your logic to handle login here
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen  bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="mb-4">
          <label
            className="block text-green-700 text-md font-semibold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            ref={userRef}
            autoComplete="off"
            aria-invalid={!validUsername ? true : false}
            aria-describedby="uidnote"
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
            required
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
          />
          <p
            id="uidnote"
            className={!validUsername ? "bg-red-300 text-red-900" : "hidden"}
          >
            <TiInfoOutline /> Username must be at least 8 characters long
          </p>
        </div>
        <div className="mb-6">
          <label
            className="block text-green-700 text-md font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex relative items-center justify-between gap-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              required
              maxLength={24}
            />
            <div
              className="absolute right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log In
        </button>
        <Link
          className="transition-all text-green-500 text-right block py-3  hover:text-green-700"
          to={"/register"}
        >
          Don't have an account? Register here
        </Link>
      </form>
    </div>
  );
};

export default Login;
