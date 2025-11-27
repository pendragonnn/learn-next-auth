"use server"

import { auth } from "@/auth";

import { SignInButton } from "./components/sign-in-button";
import Link from "next/link";
import { SignOutButton } from "./components/sign-out-button";

export default async function Home() {
  const session = await auth()
  // console.log(session)
  if(session?.user) {
    return (
      <div className="flex items-center justify-center flex-col min-h-screen">
        <Link className="bg-white py-2 px-4 my-4 cursor-pointer text-black rounded-md"  href="/user-info">User Info</Link>
        <SignOutButton />
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      {" "}
      <p>You Are Not Sign In</p>
      <SignInButton />
    </div>
  );
}
