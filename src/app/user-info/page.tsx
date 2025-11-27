import { auth } from "@/auth";
import Image from "next/image";

export default async function UserInfo() {
  const session = await auth();

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h1 className="text-2xl">Hello there, {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image
          className="rounded-full my-4"
          src={session.user.image}
          alt="user image"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}
