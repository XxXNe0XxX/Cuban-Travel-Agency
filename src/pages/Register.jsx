import { set } from "date-fns";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TiInfoOutline } from "react-icons/ti";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const [showMatchPassword, setShowMatchPassword] = useState(false);
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

  const handleSubmit = async () => {
    e.preventDefault();
    console.log("form submitted");
  };
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatchPassword(password === matchPassword);
  }, [password, matchPassword]);

  return (
    <div className="flex items-center justify-center min-h-screen  bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="mb-4 relative">
          <label
            className="block text-green-700 text-md font-semibold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <div className="flex relative items-center justify-between gap-2">
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
              className={
                validUsername || !username || !usernameFocus
                  ? "hidden"
                  : "bg-yellow-300  outline outline-2 outline-yellow-500 rounded-md flex p-1 items-center text-md absolute  right-0 justify-start gap-2 tracking-tight text-wrap w-full bottom-12 "
              }
            >
              <TiInfoOutline className="  scale-150 " />
              <span className="">
                Username must be at least 8 characters long
              </span>
            </p>
          </div>
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
              autoComplete="off"
              aria-invalid={!validPassword ? true : false}
              aria-describedby="pidnote"
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              required
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="pidnote"
              className={
                validPassword || !password || !passwordFocus
                  ? "hidden"
                  : "bg-yellow-300  outline outline-2 outline-yellow-500 rounded-md flex p-1 items-center text-md absolute  right-0 justify-start gap-2 tracking-tight text-wrap w-full bottom-12 "
              }
            >
              <TiInfoOutline className=" w-[20%] scale-150 " />
              <span className="">
                Password must be at least 8 characters long. Must contain
                numbers, lowercase and capital letters and symbols.
              </span>
            </p>
            <div
              className="absolute right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-green-700 text-md font-semibold mb-2"
            htmlFor="matchPassword"
          >
            Confirm password
          </label>
          <div className="flex relative items-center justify-between gap-2">
            <input
              type={showMatchPassword ? "text" : "password"}
              id="matchPassword"
              value={matchPassword}
              autoComplete="off"
              aria-invalid={!validMatchPassword ? true : false}
              aria-describedby="mpidnote"
              onChange={(e) => setMatchPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              required
              onFocus={() => setMatchPasswordFocus(true)}
              onBlur={() => setMatchPasswordFocus(false)}
            />
            <p
              id="mpidnote"
              className={
                validMatchPassword || !matchPassword || !matchPasswordFocus
                  ? "hidden"
                  : "bg-yellow-300  outline outline-2 outline-yellow-500 rounded-md flex p-1 items-center text-md absolute  right-0 justify-start gap-2 tracking-tight text-wrap w-full bottom-12 "
              }
            >
              <TiInfoOutline className="  scale-150 " />
              <span className="">Passwords must match</span>
            </p>
            <div
              className="absolute right-2"
              onClick={() => setShowMatchPassword(!showMatchPassword)}
            >
              {showMatchPassword ? <BiHide /> : <BiShow />}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
        <Link
          className="transition-all text-green-500 text-right  flex items-center gap-2  py-3  hover:text-green-700"
          to={"/login"}
        >
          Already have an account? Login here <FaArrowRightToBracket />
        </Link>
      </form>
    </div>
  );
};

export default Login;
