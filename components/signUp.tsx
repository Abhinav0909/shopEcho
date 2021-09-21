import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import SignIn from "./signIn";
const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    try {
      const data = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      const res = await axios.post("/api/auth/router/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        alert("You have successfully signed up");
        setStatus(true);
      }
    } catch {
      alert("User already exists");
    }
  };
  if (status === false) {
    return (
      <div className="font-sans">
        <div className="relative flex flex-col items-center min-h-screen bg-gray-100 sm:justify-center ">
          <div className="relative w-full sm:max-w-sm">
            <div className="absolute w-full h-full transform bg-blue-400 shadow-lg card rounded-3xl -rotate-6"></div>
            <div className="absolute w-full h-full transform bg-red-400 shadow-lg card rounded-3xl rotate-6"></div>
            <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
              <label className="block mt-3 text-sm font-semibold text-center text-gray-700">
                Sign Up
              </label>
              <form className="mt-10" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="off"
                    className="block w-full mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    autoComplete="off"
                    className="block w-full mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex mt-7">
                  <label className="inline-flex items-center w-full cursor-pointer">
                    <input
                      id="remember_me"
                      type="checkbox"
                      className="text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      name="remember"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Remember Me
                    </span>
                  </label>
                  <div className="w-full text-right">
                    <Link href="signIn">
                      <a className="text-sm text-gray-600 underline hover:text-gray-900">
                        Sign In
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="mt-7">
                  <button
                    className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-blue-500 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105"
                    aria-label="Sign Up"
                  >
                    SignUp
                  </button>
                </div>

                <div className="flex items-center text-center mt-7">
                  <hr className="w-full border-gray-300 rounded-md border-1" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <SignIn />;
  }
};

export default SignUp;
