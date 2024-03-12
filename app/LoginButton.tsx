"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  const { data: session } = useSession();
  return (
    <div className="ml-auto flex gap-2">
      {session?.user ? (
        <>
          <button
            className="text-white 
            rounded-2xl bg-slate-950  pt-2 pb-2 pl-7 pr-7  hover:bg-red-700
            hover:border-gray-10"
            onClick={() => signOut()}
          >
            signOut
          </button>
        </>
      ) : (
        <>
          <button
            className="text-white 
            rounded-2xl bg-slate-600  pt-2 pb-2 pl-7 pr-7  hover:bg-slate-950
            hover:border-gray-10
         
            "
            onClick={() => signIn()}
          >
            sign In
          </button>
        </>
      )}
    </div>
  );
};
export default LoginButton;
