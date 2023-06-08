"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import protoss from "assets/net.jpg";
import { useRouter } from "next/navigation";
import toast, { Toaster, saveSettings } from "react-hot-toast";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState(null);
  const router = useRouter();

  const infoUser = {
    username: "sevasit",
    password: "123456",
  };

  useEffect(() => {
    localStorage.setItem("infoUser", JSON.stringify(infoUser));
  }, []);

  useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem("infoUser")));
    const auth = localStorage.getItem("auth");
    if (auth !== false || auth !== null) {
      router.push("/profile");
    }
  }, []);

  const login = () => {
    if (username !== info.username || password !== info.password) {
      toast.error("Username or Password is invalid.");
    } else {
      toast.success("Successfully logged in.");
      localStorage.setItem("auth", true);
      setTimeout(() => {
        router.push("/profile");
      }, 3000);
    }
  };

  return (
    <>
      <Toaster />
      <div className=" w-full h-screen flex flex-col justify-center items-center bg-white">
        <Image
          src={protoss}
          alt="Protoss Technology"
          className="w-[150px] h-[150px] rounded-full"
        />
        <h1 className=" text-3xl text-black font-bold tracking-wider mb-3">
          Welcome to Protoss Technology
        </h1>
        <div className=" bg-gradient-to-r from-cyan-500/100 to-blue-500 shadow-xl w-[600px] h-[400px] rounded  shadow-sky-400/100">
          <div className=" w-full h-full flex justify-center items-center">
            <div>
              <div className="flex flex-col gap-3">
                <p className=" uppercase text-base tracking-wide font-semibold text-white">
                  username
                </p>
                <input
                  type="text"
                  className="w-full p-2 h-8 text-black border-2 border-black rounded-md focus:bg-sky-200 shadow-xl duration-300 bg-white"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <p className="uppercase text-base tracking-wide font-semibold text-white">
                  password
                </p>
                <input
                  type="password"
                  className="w-full p-2 h-8 text-black border-2 border-black rounded-md focus:bg-sky-200 shadow-xl duration-300 bg-white"
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength={12}
                  required
                />
                <button
                  type="submit"
                  onClick={login}
                  className=" bg-white font-semibold text-black rounded-md hover:text-white hover:bg-sky-400 duration-300 shadow-xl h-10 border-2 border-black mt-5 flex justify-center items-center w-full">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
