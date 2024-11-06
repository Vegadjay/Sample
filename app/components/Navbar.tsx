"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <nav className="h-16 p-3 w-full bg-slate-200 flex justify-between rounded-tr-lg rounded-tl-lg">
        <div>
          <Link href="/">
            <Image src="/logo/logo.svg" height={144} width={144} alt="This Is Logo" />
          </Link>
        </div>
        <div>
          <div className="flex justify-around w-96">
            <button className="text-black h-10 w-14 font-semibold">Create</button>
            <div className="text-red-500 h-10 w-14 font-semibold flex items-center gap-2">
              {session && session.user ? (
                <>
                  <Link href="/startup/create">
                    <span>Create User</span>
                  </Link>

                  <button onClick={() => signOut()}>
                    <span>Log Out</span>
                  </button>

                  <Link href={`/user/${session.user.id}`}>
                    <span>{session.user.name}</span>
                  </Link>
                </>
              ) : (
                <button onClick={() => signIn("github")}>
                  Login
                </button>
              )}
            </div>
            <div className="bg-blue-500 h-10 w-10 border border-black rounded-full">
              <Image src="/" alt="User avatar" height={40} width={40} />    
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
