"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [value, setValue] = useState("");
  const router = useRouter();

  

  const setLogin = () => {
    if (value === "") {
      alert("Username tidak boleh kosong");
    }else{
      router.push('/to-do-list')
    }
  }

  return (
    <div className="w-full">
      <form className="p-[20px] flex flex-col align-center mx-auto mt-[80px] rounded-lg flex bg-white min-h-[500px] w-[500px] text-black">
        <h1 className="text-bold text-xl text-center">Login</h1>
        <div className="text-black flex flex-col gap-8 mt-[20px]">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className="border-2 border-black"
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value )}
          />
          <button className="p-2 border border-black rounded" type="button" onClick={() => setLogin()}>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
