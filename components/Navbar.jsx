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
    <div className=" bg-blue-700 w-[300px] h-screen flex flex-col gap-5 items-center border-r-2 border-black py-5">
      <Image
        src={protoss}
        alt="Protoss Technology"
        className="w-[150px] h-[150px] rounded-full"
      />
      <Link
        href="/home"
        className=" bg-blue-700 font-semibold text-black hover:text-white duration-300 h-10 mt-5 flex w-full">
        <div className="flex gap-3 justify-center items-center ml-3">
          <ImHome size={25} />
          <button type="submit">Home</button>
        </div>
      </Link>
      <Link
        href="/home/employee"
        className=" bg-blue-700 font-semibold text-black hover:text-white  duration-300 h-10 mt-5 flex w-full">
        <div className="flex gap-3 justify-center items-center ml-3">
          <ImUsers size={25} />
          <button type="submit">Employees</button>
        </div>
      </Link>
      <Link
        href="/home/department"
        className=" bg-blue-700 font-semibold text-black hover:text-white  duration-300 h-10 mt-5 flex w-full">
        <div className="flex gap-3 justify-center items-center ml-3">
          <ImBriefcase size={25} />
          <button type="submit">Department</button>
        </div>
      </Link>
      <Link
        href="/profile"
        className=" bg-blue-700 font-semibold text-black hover:text-white  duration-300 h-10 mt-5 flex w-full">
        <div className="flex gap-3 justify-center items-center ml-3">
          <ImUserTie size={25} />
          <button type="submit">Profile</button>
        </div>
      </Link>
      <div
        onClick={logout}
        className="bg-blue-700 font-semibold text-black hover:text-white  duration-300 h-10 mt-5 flex w-full">
        <div className="flex gap-3 justify-center items-center ml-3">
          <ImReply size={25} />
          <button type="submit">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
