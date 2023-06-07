"use client";
import Image from "next/image";
import protoss from "assets/net.jpg";
import { useRouter } from "next/navigation";
import * as dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";

function Profile() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === false || auth === null) {
      router.push("/");
    }
  }, []);

  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center bg-white">
      <Image
        src={protoss}
        alt="Protoss Technology"
        className="rounded-full w-52 h-52"
      />
      <h1 className=" text-4xl font-bold tracking-wider mb-2 text-black">
        Your Profile
      </h1>
      <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl w-[600px] h-[400px] rounded  shadow-sky-400/100">
        <div className=" w-full h-full flex flex-col justify-center items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image src={protoss} alt="Protoss Technology" />
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-5 text-2xl font-medium py-5 px-20 shadow-xl rounded-md border-2 border-slate-900/25 bg-white text-black">
            <p className="capitalize">
              Name : {JSON.parse(localStorage.getItem("infoUser")).username}
            </p>
            <p>Date : {dayjs(Date()).format("DD/MM/YYYY")}</p>
            <p>Time : {dayjs(Date()).format("HH:mm")}</p>
          </div>
          <Link
            href="/home"
            className=" bg-white font-semibold text-black rounded-md hover:text-white hover:bg-sky-400 duration-300 shadow-xl h-10 border-2 border-black mt-5 flex justify-center items-center w-36">
            <button type="submit">Enter to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
