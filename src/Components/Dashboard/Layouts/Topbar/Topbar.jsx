import React, { useState } from "react";
import { FaSearch, FaBell, FaMoon, FaSun, FaInfoCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Dialog } from "@headlessui/react";

import "./topbar.css";

const Topbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <section
      className="w-full h-[10rem] bg-[#0b1437] lg:w-[calc(100vw-18rem)] lg:ml-[18rem] fixed"
      id="topbar"
    >
      <div className="pt-14 px-[2rem] flex justify-center md:justify-between">
        <div className="text-white hidden md:block">
          <div className="text-lg">Pages / Profile</div>
          <div className="text-4xl font-bold tracking-wider">Profile</div>
        </div>
        <div className="h-16 px-3 bg-[#111C44] rounded-full flex items-center shadow-xl">
          <div class="form-field">
            <input
              type="text"
              className="rounded-full pl-10 py-2 bg-[#0b1437] text-white capitalize"
              placeholder="Search..."
            />
            <span class="icon">
              <FaSearch />
            </span>
          </div>
          <ul className="flex gap-5 mx-5 top-right">
            <li>
              <button>
                <FaBell />
              </button>
            </li>
            <li>
              <button onClick={() => changeTheme()}>
                {darkTheme ? <FaMoon /> : <FaSun />}
              </button>
            </li>
            <li>
              <button>
                <FaInfoCircle />
              </button>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setShowLogout(!showLogout)}
            >
              <img
                src="/assets/img/lisa.jpg"
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
            </li>
          </ul>
        </div>
      </div>
      {/* Logout Panel */}

      {/* <div className="w-60 h-52 bg-[#253057] rounded-3xl text-white tracking-wider shadow-xl">
          <h3 className="p-5 font-bold">👋 Hi, Lisa Manoban</h3>
          <hr />
          <div className="py-5 px-8">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#o">Profile Setting</a>
              </li>
              <li>
                <a href="#o">Newsletter</a>
              </li>
              <li>
                <a
                  href="#o"
                  className="text-zync-500 font-bold flex align-middle gap-2"
                >
                  <MdLogout /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div> */}

      <Dialog
        as="div"
        open={showLogout}
        onClose={() => setShowLogout(!showLogout)}
        className="absolute top-32 right-12"
      >
        <Dialog.Panel
          as="div"
          className="w-60 h-52 bg-[#253057] rounded-3xl text-white tracking-wider shadow-xl"
        >
          <h3 className="p-5 font-bold">👋 Hi, Lisa Manoban</h3>
          <hr />
          <div className="py-5 px-8">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#o" className="font-semibold">
                  Profile Setting
                </a>
              </li>
              <li>
                <a href="#o" className="font-semibold">
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#o"
                  className="text-zync-500 font-bold flex align-middle gap-2"
                >
                  <MdLogout /> Logout
                </a>
              </li>
            </ul>
          </div>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
};

export default Topbar;
