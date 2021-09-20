import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async(e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    try{
    const data = { email: email, password: password };
    const res = await axios.post("http://localhost:3000/api/auth/router/login",data,{
         headers:{
             'Content-Type':'application/json',
         }
        })
      localStorage.setItem('token',res.data.token);
      const accessToken = localStorage.getItem('token');
     if(res.status === 200 && accessToken){
      alert('Login Successful');
       router.push('/');
     }
    }catch{
      alert('Invalid  Email or Password');
    }

  }
  return (
    <div className="font-sans">
      <div className="relative flex flex-col items-center min-h-screen bg-gray-100 sm:justify-center ">
        <div className="relative w-full sm:max-w-sm">
          <div className="absolute w-full h-full transform bg-blue-400 shadow-lg card rounded-3xl -rotate-6"></div>
          <div className="absolute w-full h-full transform bg-red-400 shadow-lg card rounded-3xl rotate-6"></div>
          <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
            <label className="block mt-3 text-sm font-semibold text-center text-gray-700">
              Login
            </label>
            <form className="mt-10" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter your password"
                  className="block w-full mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4"
                  required
                  onChange={(e) => setPassword(e.target.value)}
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
                  <Link href="forgetPassword">
                  <a
                    className="text-sm text-gray-600 underline hover:text-gray-900"
                  >
                    Forgot Password
                  </a>
                  </Link>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-blue-500 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105"
                >
                  Login
                </button>
              </div>

              <div className="flex items-center text-center mt-7">
                <hr className="w-full border-gray-300 rounded-md border-1" />
              </div>
              <div className="mt-7">
                <div className="flex items-center justify-center">
                  <label className="mr-2">Are you new?</label>
                  <Link href="SignUp">
                    <a className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                      Create an account
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
