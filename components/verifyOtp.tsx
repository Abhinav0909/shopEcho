import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
const VerifyOtp: React.FC<any> = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const handleSubmit = async(e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    try{
    const data = { email:email,otp:otp,newPassword:newPassword};
    const res = await axios.post("http://localhost:3000/api/otp/router/otpVerification",data,{
         headers:{
             'Content-Type':'application/json',
         }
     })
     if(res.status === 200){
       alert("Password has been successfully changed");
       router.push('/auth/SignIn');

     }
    }catch{
      alert("Check otp again");
    }
    };
  return (
    <div className="font-sans">
      <div className="relative flex flex-col items-center min-h-screen bg-gray-100 sm:justify-center ">
        <div className="relative w-full sm:max-w-sm">
          <div className="absolute w-full h-full transform bg-blue-400 shadow-lg card rounded-3xl -rotate-6"></div>
          <div className="absolute w-full h-full transform bg-red-400 shadow-lg card rounded-3xl rotate-6"></div>
          <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
            <label className="block mt-3 text-sm font-semibold text-center text-gray-700">
             Set new Password
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
                  type="otp"
                  name="otp"
                  autoComplete="off"
                  placeholder="Enter your password"
                  className="block w-full mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4"
                  required
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div className="mt-7">
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter your new password"
                  className="block w-full mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4"
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full py-3 text-white transition duration-500 ease-in-out transform bg-blue-500 shadow-xl rounded-xl hover:shadow-inner focus:outline-none hover:-translate-x hover:scale-105"
                >
                Verify Otp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
  );
};
export default VerifyOtp;
