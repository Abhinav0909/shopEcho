/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head"
import React,{ useState } from "react";
import  Otp from '../../components/otp'
const forgetPassword = () =>{
    return <div>
    <Head>
        <title>Forget Password</title>
        </Head>
        <Otp />   
   </div>
}

//changed the name
export default forgetPassword
