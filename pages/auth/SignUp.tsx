import SignUp from "../../components/signUp"
import Head from "next/head"
import React from "react"
export interface AuthProps{}
const SignUpAuth:React.FC<AuthProps> = () => {
  return (
    <div>
    <Head>
            <title>Auth</title>
        </Head>
    <SignUp/>
        </div>

  )
}

export default SignUpAuth;