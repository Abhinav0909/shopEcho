import SignUp from "../../components/SignUp"
import Head from "next/head"
import React from "react"
export interface AuthProps{}
const auth:React.FC<AuthProps> = () => {
  return (
    <div>
    <Head>
            <title>Auth</title>
        </Head>
        <div>
    <SignUp />
    </div>
        </div>

  )
}

export default auth;
