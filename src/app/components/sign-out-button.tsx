"use client";

import { logout } from "../lib/actions/auth";

export const SignOutButton = () => {
  return (
    <button className="bg-white py-2 px-4 my-4 cursor-pointer text-black rounded-md" onClick={() => logout()}>Logout</button>
  )
}

