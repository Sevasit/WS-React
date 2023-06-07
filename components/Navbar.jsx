"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import protoss from "assets/net.jpg";
import {
  ImHome,
  ImUserTie,
  ImUsers,
  ImBriefcase,
  ImReply,
} from "react-icons/im";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("auth");
    router.push("/");
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500/100 to-blue-500 w-[300px] h-screen flex flex-col gap-5 items-center border-r-2 border-black py-5">
      <Image
        src={protoss}
        alt="Protoss Technology"
        className="w-[150px] h-[150px] rounded-full"
      />
      <Link
        href="/home"
        className=" bg-gradient-to-r from-cyan-500/100 to-blue-500 font-semibold text-black hover:text-white duration-300 hover:bg-red-600 h-10 mt-5 flex w-full">
        <div className="flex gap-1 justify-center items-center ml-3">
          <ImHome size={20} />
          <button type="submit">Home</button>
        </div>
      </Link>
      <Link
        href="/home/employee"
        className=" bg-gradient-to-r from-cyan-500/100 to-blue-500 font-semibold text-black hover:text-white hover:bg-sky-400 duration-300 h-10 mt-5 flex w-full">
        <div className="flex gap-1 justify-center items-center ml-3">
          <ImUsers size={20} />
          <button type="submit">Employees</button>
        </div>
      </Link>
      <Link
        href="/home/department"
        className=" bg-gradient-to-r from-cyan-500/100 to-blue-500 font-semibold text-black hover:text-white hover:bg-sky-400 duration-300 h-10 mt-5 flex w-full">
        <div className="flex gap-1 justify-center items-center ml-3">
          <ImBriefcase size={20} />
          <button type="submit">Department</button>
        </div>
      </Link>
      <Link
        href="/profile"
        className=" bg-gradient-to-r from-cyan-500/100 to-blue-500 font-semibold text-black hover:text-white hover:bg-sky-400 duration-300 h-10 mt-5 flex w-full">
        <div className="flex gap-1 justify-center items-center ml-3">
          <ImUserTie size={20} />
          <button type="submit">Profile</button>
        </div>
      </Link>
      <div
        onClick={logout}
        className="bg-gradient-to-r from-cyan-500/100 to-blue-500 font-semibold text-black hover:text-white hover:bg-sky-400 duration-300 h-10 mt-5 flex w-full">
        <div className="flex gap-1 justify-center items-center ml-3">
          <ImReply size={20} />
          <button type="submit">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
