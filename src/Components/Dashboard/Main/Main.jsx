import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar, Topbar } from "../Layouts";
import {
  FaAlignJustify,
  FaHome,
  FaNewspaper,
  FaMobileAlt,
  FaBook,
  FaBriefcaseMedical,
} from "react-icons/fa";
import Home from "../../../Pages/Home/Home";

const Main = ({ childen }) => {
  const [showNav, setShowNav] = useState(false);

  const changeShowNav = () => {
    setShowNav(!showNav);
  };
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  });
  return (
    // <section className="w-full h-full grid" id="main">
    //   <div className="">
    //     <Sidebar />
    //   </div>
    //   <div>
    //     <Topbar />
    //     <div>Main</div>
    //   </div>
    // </section>
    <div className="relative">
      <div class="w-full flex">
        <div class="w-max hidden lg:block">
          <Sidebar />
        </div>
        <div class="w-full ml-[18rem] md:ml-0">
          <Topbar />
          <div class="w-full h-full bg-[#0b1437] mt-[10rem]">
            {/* <Home /> */}
            <Outlet />
          </div>
        </div>
      </div>
      {showNav ? (
        <div className="fixed right-16 bottom-[3.3rem] bg-[#0b1437] w-14 h-max py-16 rounded-full lg:hidden border border-white transition-all duration-200">
          <div className="flex justify-center ">
            <ul className="flex flex-col gap-5">
              <li>
                <a href="#o" className="menu-nav">
                  <FaHome />
                </a>
              </li>
              <li>
                <a href="#o">
                  <FaNewspaper />
                </a>
              </li>
              <li>
                <a href="#o">
                  <FaBook />
                </a>
              </li>
              <li>
                <a href="#o">
                  <FaMobileAlt />
                </a>
              </li>
              <li>
                <a href="#o">
                  <FaBriefcaseMedical />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      <button
        className="fixed z-10 right-16 bottom-10 w-14 h-14 bg-white rounded-full flex lg:hidden border"
        onClick={() => changeShowNav()}
      >
        <div className="m-auto">
          <FaAlignJustify
            className={showNav ? "text-2xl rotate-90" : "text-2xl "}
          />
        </div>
      </button>
    </div>
  );
};

export default Main;
