import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useLocation } from "react-router-dom";
function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className=" bg-gradient-to-b from-[#1b2961] to-[#111C44] max-h-screen text-white md:block hidden shadow-xl">
      <div className="h-[100px] flex items-center justify-center border-b border-slate-600">
        <h1 className="text-xl font-bold uppercase tracking-widest">
          Back<span className="font-thin normal-case">end</span>
        </h1>
      </div>
      <div
        className="my-4 h-[calc(100%-80px)] overflow-y-scroll scrollbar-hide px-2"
        onClick={() => setActiveMenu("")}
      >
        <div
          className={
            splitLocation[1] === ""
              ? "active pl-4 py-3"
              : "pl-4 py-3 opacity-60 hover:opacity-100"
          }
        >
          <Link className="flex items-center gap-2" to="">
            <img className="h-3 w-3" src="./assets/icon/home.svg" alt="" />
            <span
              className={
                splitLocation[1] === ""
                  ? "active text-xs font-bold tracking-wide"
                  : "text-xs font-thin tracking-wide"
              }
            >
              Dashboard
            </span>
          </Link>
        </div>
        <div
          className={
            splitLocation[1] === "about"
              ? "active pl-4 py-3"
              : "pl-4 py-3 opacity-60 hover:opacity-100"
          }
        >
          <Link className="flex items-center gap-2" to="/about">
            <img className="h-3 w-3" src="./assets/icon/stick.svg" alt="" />
            <span
              className={
                splitLocation[1] === "about"
                  ? "active text-xs font-bold tracking-wide"
                  : "text-xs font-thin tracking-wide"
              }
            >
              About{" "}
            </span>
          </Link>
        </div>
        <div
          className={
            splitLocation[1] === "profile"
              ? "active pl-4 py-3"
              : "pl-4 py-3 opacity-60 hover:opacity-100"
          }
        >
          <Link className="flex items-center gap-2" to="/profile">
            <img className="h-3 w-3" src="./assets/icon/person.svg" alt="" />
            <span
              className={
                splitLocation[1] === "profile"
                  ? "active text-xs font-bold tracking-wide"
                  : "text-xs font-thin tracking-wide"
              }
            >
              Profile
            </span>
          </Link>
        </div>
        <div
          className={
            splitLocation[1] === "projects"
              ? "active pl-4 py-3"
              : "pl-4 py-3 opacity-60 hover:opacity-100"
          }
        >
          <Link className="flex items-center gap-2" to="/projects">
            <img
              className="h-3 w-3"
              src="./assets/icon/square-menu.svg"
              alt=""
            />
            <span
              className={
                splitLocation[1] === "projects"
                  ? "active text-xs font-bold tracking-wide"
                  : "text-xs font-thin tracking-wide"
              }
            >
              Projects
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
