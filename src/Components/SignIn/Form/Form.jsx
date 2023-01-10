import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./form.css";

const Form = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
    console.log(dataLogin);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      dataLogin.email === "example@gmail.com" &&
      dataLogin.password === "123123"
    ) {
      console.log(`berhasil masuk`);
    }
    console.log(dataLogin);
  };

  return (
    <div className="w-full " id="form">
      <h1 className="text-lg font-semibold">Sign In</h1>
      <p className="text-xs">Lorem ipsum dolor sit, amet consectetur.</p>

      <button className="w-full bg-[#222d59] mt-3 py-2 rounded-lg font-thin flex justify-center gap-2 text-xs  items-center hover:opacity-90">
        <FcGoogle /> Sign In With Google
      </button>
      <div className="stripped my-2">
        <span className="text-sm">or</span>
      </div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <div class="mt-4">
          <label class="block text-white text-xs font-bold mb-2" for="username">
            Email*
          </label>
          <input
            class=" bg-[#0b1437]  border border-zinc-600 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none text-sm focus:border-white"
            id="email"
            type="text"
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div class="mt-4">
          <label class="block text-white text-xs font-bold mb-2" for="username">
            Password*
          </label>
          <input
            class=" bg-[#0b1437]  border border-zinc-600 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none text-sm focus:border-white"
            id="password"
            type="password"
            name="password"
            placeholder="Min 8 characters"
            onChange={handleChange}
          />
        </div>
        <div class="mt-4 flex justify-between aligm">
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight text-sm" type="checkbox" />
            <span class="text-xs">Keep me logged in</span>
          </label>
          <a href="#a" className="text-xs">
            Forgot Password?
          </a>
        </div>
        <button
          className="w-full bg-[#3d52a4] mt-3 py-2 rounded-xl font-thin text-sm hover:opacity-90"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div href="#a" className="font-thin mt-4 text-sm">
        Not registered yet?{" "}
        <button className="font-semibold">Create Account</button>
      </div>
    </div>
  );
};

export default Form;
