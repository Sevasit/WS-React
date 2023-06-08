"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Employee() {
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
      setEmployee((await axios.get("http://localhost:8081/employee")).data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  console.log(employee);

  return (
    <div className="w-full bg-slate-50 h-screen">
      <div className="overflow-y-auto w-full h-full">
        <table className="table table-pin-rows table-lg table-pin-cols">
          <thead>
            <tr className=" bg-slate-800 text-xl text-white">
              <td className="">No</td>
              <td className="">Name</td>
              <td className="">Job</td>
              <td className="">Manager</td>
              <td className="">Hiredate</td>
              <td className="">Department</td>
            </tr>
          </thead>
          <tbody className=" text-blue-700 font-medium">
            {employee.map((employee) => (
              <tr
                className="hover:bg-slate-100 hover:text-red-500 duration-200"
                key={employee.empNo}>
                <td>{employee.empNo == null ? "null" : employee.empNo}</td>
                <td>{employee.ename == null ? "null" : employee.ename}</td>
                <td>{employee.job == null ? "null" : employee.job}</td>
                <td>{employee.mgr == null ? "null" : employee.mgr}</td>
                <td>
                  {employee.hiredate == null ? "null" : employee.hiredate}
                </td>
                <td>{employee.deptno == null ? "null" : employee.deptno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
