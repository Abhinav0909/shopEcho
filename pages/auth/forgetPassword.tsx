/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head"
import React,{ useState } from "react";
import  Otp from '../../components/Otp'
import verifyOtp from "../../components/verifyOtp";
const forgetPassword = () =>{
    const [otpState, setOtpState] = useState<boolean>(false);
    return <div>
    <Head>
        <title>Forget Password</title>
        </Head>
        <Otp />   
   </div>
}

export default forgetPassword
