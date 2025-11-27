"use client";

import { login } from "../lib/actions/auth";

export const SignInButton = () => {
  return (
    <button className="bg-white py-2 px-4 my-4 cursor-pointer text-black rounded-md" onClick={() => login()}>Sign In With Github</button>
  )
}

