import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Global/Private/Sidebar/Sidebar";
import Topbar from "../Global/Private/Topbar/Topbar";
import Cookies from "js-cookie";

function Dashboard() {
  const Navigate = useNavigate();
  const checkLoggedUser = () => {
    if (!Cookies.get("user")) {
      console.log(`belum login`);
      Navigate("/sign-in");
    }
  };
  useEffect(() => {
    checkLoggedUser();
  }, []);
  return (
    <div className="grid grid-cols-6 bg-[#0B1437]">
      <Sidebar />
      <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-7 h-screen">
        <Topbar />
        <main className="h-screen overflow-y-auto scrollbar-hide">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
