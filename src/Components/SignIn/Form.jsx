import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./form.css";

const Form = () => {
  return (
    <div className="w-full " id="form">
      <h1 className="text-3xl font-semibold">Sign In</h1>
      <p>Lorem ipsum dolor sit, amet consectetur.</p>

      <button className="w-full bg-[#222d59] mt-3 py-3 rounded-xl font-thin flex justify-center gap-2  items-center">
        <FcGoogle /> Sign In With Google
      </button>
      <div className="stripped my-2">
        <span>or</span>
      </div>
      <form action="">
        <div class="mt-4">
          <label class="block text-white text-lg font-bold mb-2" for="username">
            Email*
          </label>
          <input
            class=" bg-[#0b1437]  border border-zinc-600 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none "
            id="email"
            type="text"
            placeholder="example@gmail.com"
          />
        </div>
        <div class="mt-4">
          <label class="block text-white text-lg font-bold mb-2" for="username">
            Password*
          </label>
          <input
            class=" bg-[#0b1437]  border border-zinc-600 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none "
            id="password"
            type="password"
            placeholder="Min 8 characters"
          />
        </div>
        <div class="mt-4 flex justify-between">
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm">Keep me logged in</span>
          </label>
          <a href="#a">Forgot Password?</a>
        </div>
        <button className="w-full bg-[#3d52a4] mt-3 py-2 rounded-xl font-thin">
          Sign In
        </button>
      </form>
      <div href="#a" className="font-thin mt-4">
        Not registered yet?{" "}
        <button className="font-bold">Create Account</button>
      </div>
    </div>
  );
};

export default Form;
