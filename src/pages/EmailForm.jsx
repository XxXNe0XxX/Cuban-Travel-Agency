import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const EmailForm = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const send = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-gray-400 rounded-lg p-4 w-full max-w-[600px]">
      <p
        ref={errRef}
        className={errMsg ? "bg-red-300 text-red-600" : " hidden"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form
        onSubmit={send}
        className="flex flex-col gap-1 p-2 mx-auto space-y-1 "
      >
        <h1 className="self-center text-2xl font-bold uppercase">
          Talk with us
        </h1>
        <label htmlFor="username"></label>
        <input
          id="username"
          className=" h-10 p-2 border-blue-100 border-2 rounded-lg"
          ref={userRef}
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        ></input>
        <label htmlFor="phone"></label>
        <input
          id="phone"
          className=" h-10 p-2 border-blue-100 border-2 rounded-lg"
          type="text"
          placeholder="Phone Number..."
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <label htmlFor="email"></label>

        <input
          id="email"
          className=" h-10 p-2 border-blue-100 border-2 rounded-lg"
          type="text"
          placeholder="Email us... "
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label htmlFor="message"></label>

        <textarea
          id="message"
          className=" h-28 p-2 border-blue-100 border-2 rounded-lg"
          type="text"
          placeholder="What's on your mind "
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        ></textarea>

        <button
          className="bg-blue-800 p-2 my-2 font-bold text-white rounded-lg border-2 border-black"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default EmailForm;
