"use client";
import React from "react";
import { useRouter } from "next/navigation";
function DraftProfile() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="contaier flex justify-center flex-col">
      <button
        className="p-10 text-4xl font-bold  text-gray-600  md:text-yellow-500 
       lg:text-black xl:text-pink-400"
        onClick={handleClick}
      >
        Go Home
      </button>
    </div>
  );
}

export default DraftProfile;
