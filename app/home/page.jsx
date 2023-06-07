"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === false || auth === null) {
      router.push("/");
    }
  }, []);

  return <div className="w-full bg-white"></div>;
}

export default Home;
