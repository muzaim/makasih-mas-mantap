import React from "react";
import {
  FaGithubAlt,
  FaHome,
  FaNewspaper,
  FaMobileAlt,
  FaBook,
  FaBriefcaseMedical,
} from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <section
      className="w-[18rem] h-full max-h-screen fixed py-2 bg-[#111c44]"
      id="sidebar"
    >
      <div className="logo flex items-center justify-center py-10 px-3 gap-5 ">
        <FaGithubAlt className="w-[4.5rem]" />
        <span className="text-zinc-300 text-[2.5rem] lg:text-[2rem]  xl:block">
          Backend
        </span>
      </div>
      <hr />
      <div className="pt-10 lg:px-2">
        <ul className="flex flex-col gap-y-1 ">
          <li className="group active pl-10 py-4 menu-item">
            <FaHome className="group-hover:text-white " />
            <a href="/" className="group-hover:text-white ">
              Dashboard
            </a>
          </li>
          <li className="group  pl-10 py-4 menu-item">
            <FaNewspaper className="group-hover:text-white" />
            <a href="about" className="group-hover:text-white">
              About
            </a>
          </li>
          <li className="group  pl-10 py-4 menu-item">
            <FaBook className="group-hover:text-white" />
            <a href="project" className="group-hover:text-white">
              Project
            </a>
          </li>
          <li className="group pl-10 py-4 menu-item">
            <FaMobileAlt className="group-hover:text-white" />
            <a href="absensi" className="group-hover:text-white">
              Absensi
            </a>
          </li>
          <li className="group pl-10 py-4 menu-item">
            <FaBriefcaseMedical className="group-hover:text-white" />
            <a href="izin" className="group-hover:text-white">
              Izin
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
