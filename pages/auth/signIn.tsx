import SignIn from "../../components/signIn"
import Head from "next/head"
import React from "react"
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
