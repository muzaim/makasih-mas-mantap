import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home w-full h-[200rem]" id="home">
      <div className="py-4 px-[2rem] grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4  ">
        <div className="min-w-max h-[20rem] bg-[#111c44] rounded-xl flex flex-col justify-center px-5 shadow-xl">
          <div className="text-center text-white">
            <img
              src="/assets/img/lisa.jpg"
              alt=""
              className="w-24 h-24 object-cover rounded-full block mx-auto"
            />
            <h1 className="text-xl mt-2">Lisa Manoban</h1>
            <p className="text-zinc-400">Backend Developer</p>
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
        <div className="min-w-max  h-[20rem] bg-[#111c44] rounded-xl flex flex-col justify-center px-5 xl:col-span-2 shadow-xl ">
          <div className="px-5 text-center flex flex-col">
            <h1 className="text-xl text-zinc-400">Current Project</h1>
            <h3 className="text-3xl font-bold text-white">Redberries 1.1</h3>
            <div className="mt-8 mb-2 flex justify-between">
              <p className="text-zinc-400">
                <span className="font-bold text-white">12</span> Task Completed
              </p>
              <span className="font-bold text-white">50 Task</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
            <div className="mt-2 text-white font-semibold">
              <span className="text-zinc-400"> On Progress :</span> Fixing
              genCandidateTalentics
            </div>
          </div>
        </div>
        <div className="min-w-max  h-[20rem] bg-[#111c44] rounded-xl flex flex-col justify-center px-5 shadow-xl">
          dsada
        </div>
        {/* <div className="w-full h-[200rem] bg-yellow-300">dsasda</div> */}
      </div>
    </section>
  );
};

export default Home;
