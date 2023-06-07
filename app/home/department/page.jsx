"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Department = () => {
  const [employee, setEmployee] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === false || auth === null) {
      router.push("/");
    }
  }, []);

  const getEmployees = async () => {
    try {
      setEmployee((await axios.get("http://localhost:8081/department")).data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  console.log(employee);
  return (
    <div className="w-full bg-white h-screen">
      <div className="overflow-y-auto w-full h-full">
        <table className="table table-pin-rows table-lg table-pin-cols font-medium text-lg">
          <thead>
            <tr className=" bg-slate-300 text-xl text-black">
              <td className="">No</td>
              <td className="">Department</td>
              <td className="">Location</td>
            </tr>
          </thead>
          <tbody className=" text-slate-500">
            {employee.map((employee) => (
              <tr
                className="hover:bg-slate-200 duration-500"
                key={employee.deptno}>
                <td>{employee.deptno == null ? "null" : employee.deptno}</td>
                <td>{employee.dname == null ? "null" : employee.dname}</td>
                <td>{employee.loc == null ? "null" : employee.loc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Department;
