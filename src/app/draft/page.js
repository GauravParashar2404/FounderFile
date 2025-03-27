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
        className="p-10 text-4xl font-bold text-amber-400 md:text-blue-600 lg:text-red-700 xl:text-pink-500"
        onClick={handleClick}
      >
        Go Home
      </button>
    </div>
  );
}

export default DraftProfile;
