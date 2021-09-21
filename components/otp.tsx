import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import VerifyOtp from "./verifyOtp";
const Otp = () => {
  const router = useRouter();
  const [otpState, setOtpState] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async(e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    try{
    const data = { email: email};
    const res = await axios.post("api/otp/router/otpGenerator",data,{
         headers:{
             'Content-Type':'application/json',
         }
     })
     if(res.status === 200){
       alert("Otp has been sent to your email");
      setOtpState(true);
     }
    }catch{
      alert("Check your mail again");
    }
    };
    if(otpState === false){
  return (
    <div className="font-sans">
      <div className="relative flex flex-col items-center min-h-screen bg-gray-100 sm:justify-center ">
        <div className="relative w-full sm:max-w-sm">
          <div className="absolute w-full h-full transform bg-blue-400 shadow-lg card rounded-3xl -rotate-6"></div>
          <div className="absolute w-full h-full transform bg-red-400 shadow-lg card rounded-3xl rotate-6"></div>
          <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
            <label className="block mt-3 text-sm font-semibold text-center text-gray-700">
              Reset your password
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
                <button
                  type="submit"
                  className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-blue-500 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105"
                aria-label="Send Otp"
                >
                  Send Otp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
    }
    else{
      return <VerifyOtp />
    }
};
export default Otp;
