"use server"

import { auth } from "@/auth";

import { SignInButton } from "./components/sign-in-button";
import Image from "next/image";

export default async function Home() {
  const session = await auth()
  // console.log(session)
  if(session?.user) {
    return (
      <div className="flex items-center justify-center flex-col min-h-screen">
        <h1 className="text-2xl">Hello there, {session.user.name}</h1>
        {session.user.image && (
          <Image className="rounded-full my-4" src={session.user.image} alt="user image" width={100} height={100}/>
        )}
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
