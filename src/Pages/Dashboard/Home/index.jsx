import React from "react";
import "./style.css";

function index() {
  return (
    <div className="py-3 px-4 text-white overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#111C44] min-w-max rounded-xl h-52 py-4 px-5 text-white shadow-xl ">
          <div className="text-center text-white">
            <img
              src="/assets/img/lisa.jpg"
              alt=""
              className="w-16 h-16 object-cover rounded-full block mx-auto "
            />
            <h1 className="text-base mt-2">Lisa Manoban</h1>
            <p className="text-zinc-400 text-sm">Backend Developer</p>
          </div>
          <div className="flex gap-10 justify-center mt-6 text-center">
            <div>
              <span className="amount">12</span>
              <h1 className="title">Project</h1>
            </div>
            <div>
              <span className="amount">Junior</span>
              <h1 className="title">Position</h1>
            </div>
            <div>
              <span className="amount">Xsis</span>
              <h1 className="title">Outsorce</h1>
            </div>
          </div>
        </div>
        <div className=" bg-[#111C44] rounded-xl h-52 py-4 px-5 text-white lg:col-span-2 lg:min-w-max shadow-xl">
          <div className="px-5 text-center flex flex-col ">
            <h1 className="text-sm text-zinc-400">Current Project</h1>
            <h3 className="text-lg font-bold text-white">Redberries 1.1</h3>
            <div className="mt-8 mb-2 flex justify-between text-xs">
              <p className="text-zinc-400">
                <span className=" text-white">12</span> Task Completed
              </p>
              <span className=" text-white">50 Task</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
            <div className="mt-3 text-white font-semibold text-xs">
              <span className="text-zinc-400"> On Progress :</span> Fixing
              genCandidateTalentics
            </div>
          </div>
        </div>
        <div className="min-w-max bg-[#111C44] rounded-xl h-52 py-4 px-5 text-white shadow-xl">
          s
        </div>
      </div>
    </div>
  );
}

export default index;
