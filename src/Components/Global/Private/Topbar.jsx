import { Disclosure, Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { FaSearch, FaBell, FaMoon, FaSun, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import "./topbar.css";

function Topbar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <Disclosure
      as="nav"
      className="p-4  bg-[#0B1437] h-[100px] flex items-center justify-center sm:justify-between "
    >
      {({ open }) => (
        <>
          <div className="text-white hidden sm:block">
            <div className="text-xs">Pages / Dashboard</div>
            <div className="text-xl font-bold">Dashboard</div>
          </div>
          <div className="bg-[#111C44] rounded-full flex items-center justify-evenly px-3 py-[0.3rem] shadow-xl gap-3 text-white">
            <input
              type="text"
              className="bg-[#0B1437] rounded-full w-40 px-4 py-2 text-sm"
              placeholder="Search"
            />
            <div className="cursor-pointer">
              <FaBell className="top-svg" />
            </div>
            <div className="cursor-pointer mt-0" onClick={() => changeTheme()}>
              {/* {darkTheme ? <FaMoon /> : <FaSun />} */}
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <FaMoon className="top-svg" />
                  </div>
                  <div class="flip-box-back">
                    <FaSun className="top-svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" cursor-pointer">
              <FaInfoCircle className="top-svg" />
            </div>
            <Menu as="div" className="relative">
              <Menu.Button>
                <img
                  className="h-7 w-7 -mb-2 rounded-full ring-2 cursor-pointer object-cover"
                  src="./assets/img/lisa.jpg"
                  alt=""
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="p-3 absolute right-0 top-10 w-56 origin-top-right bg-[#253057] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item as="div" className="flex justify-center my-2">
                    {({ active }) => (
                      <Link
                        className="text-white text-xs tracking-wide"
                        to="/dashboard"
                      >
                        Hi <span className="font-bold">Lisa Manoban</span> 👋
                      </Link>
                    )}
                  </Menu.Item>
                  <hr />
                  <Menu.Item as="div">
                    {({ active }) => (
                      <Link
                        className="text-white text-xs tracking-wide"
                        to="/dashboard"
                      >
                        Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item as="div">
                    {({ active }) => (
                      <Link
                        className="text-white text-xs tracking-wide flex gap-1 items-center"
                        to="/dashboard"
                      >
                        <MdLogout /> Logout
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Topbar;
