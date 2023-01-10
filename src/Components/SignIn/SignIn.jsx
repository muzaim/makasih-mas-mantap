import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import Form from "./Form/Form";

const SignIn = () => {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-r from-[#0b1437] to-[#212d58] text-white px-5 py-16 lg:py-0 flex justify-center  lg:grid lg:grid-flow-col lg:grid-cols-2 lg:pt-0 lg:h-screen lg:px-0"
      id="sign-in"
    >
      <div className="w-full px-2 sm:w-[70%] md:w-[45%] lg:flex lg:mx-auto ">
        <div className="w-full h-full flex flex-col justify-between lg:py-8">
          <a href="/" className="font-thin flex gap-2 items-center  text-xs">
            <BsChevronLeft /> Back to dashboard
          </a>
          <Form />
          <span className="text-xs">@2023 Made with love ♡</span>
        </div>
      </div>
      <div className="bg-zinc-900 rounded-bl-[20rem] hidden lg:block  shadow-md">
        Logo
      </div>
    </section>
  );
};

export default SignIn;
