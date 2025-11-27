"use server"

import { auth } from "@/auth";

import { SignInButton } from "./components/sign-in-button";

export default async function Home() {
  const session = await auth()
  console.log({ session})
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      {" "}
      <p>You Are Not Sign In</p>
      <SignInButton />
    </div>
  );
}
