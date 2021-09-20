import SignIn from "../../components/SignIn"
import Head from "next/head"
import React from "react"
import SignUp from "../../components/SignUp"
export interface AuthProps{}
const SignInAuth:React.FC<AuthProps> = () => {
  return (
    <div>
    <Head>
            <title>Auth</title>
        </Head>
    <SignIn />
        </div>

  )
}

export default SignInAuth;
