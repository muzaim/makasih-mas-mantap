import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./form.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
    console.log(dataLogin);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const token =
      "DFCCSZ1QO1U2HGB0L2DW03W1JHF0WNQZT449ZNKKBW2SRC72L5C7DDDXXSCONRQI5ZBH4WKXYFPRF434NS8913WRWHXNFB2HVEAV8SZJL2ZSIG1KLKYPVN92G94J7NEUUZMNW3O9U72JKYBH2WCAYBJCOEEFFEEG2MG";
    if (
      dataLogin.email === "example@gmail.com" &&
      dataLogin.password === "123123"
    ) {
      Cookies.set("user", token, { expires: 1 });
      Navigate("/");
      console.log(`berhasil masuk`);
    } else {
      console.log(`password salah`);
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
        <div className="mt-4">
          <label
            className="block text-white text-xs font-bold mb-2"
            htmlFor="username"
          >
            Email*
          </label>
          <input
            className=" bg-[#0b1437]  border border-zinc-600 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none text-sm focus:border-white"
            id="email"
            type="text"
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-white text-xs font-bold mb-2"
            htmlFor="username"
          >
            Password*
          </label>
          <input
            className=" bg-[#0b1437]  border border-zinc-600 rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none text-sm focus:border-white"
            id="password"
            type="password"
            name="password"
            placeholder="Min 8 characters"
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex justify-between aligm">
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight text-sm" type="checkbox" />
            <span className="text-xs">Keep me logged in</span>
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
