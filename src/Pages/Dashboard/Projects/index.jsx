import React, { useState } from "react";

import { Switch } from "@headlessui/react";

const Projects = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="py-3 px-4 text-white overflow-y-auto">
      <div className="w-full h-[20rem] bg-[#111C44] min-w-max rounded-xl py-4 px-5 text-white shadow-xl ">
        <h1 className="font-semibold capitalize">chart filter</h1>

        <div className="grid gap-3 mt-3">
          <div className="w-[15rem] h-14  bg-[#1b254b] rounded-3xl flex">
            <div className="w-full px-5 flex justify-between items-center m-auto">
              <h1 className="text-xs">Project Redberries</h1>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-[#d0bcff]" : "bg-[#49454f]"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>
          <div className="w-[15rem] h-14  bg-[#1b254b] rounded-3xl flex">
            <div className="w-full px-5 flex justify-between  items- m-auto">
              <h1 className="text-xs">Project Non CSM</h1>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-[#d0bcff]" : "bg-[#49454f]"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>
          <div className="w-[15rem] h-14  bg-[#1b254b] rounded-3xl flex">
            <div className="w-full px-5 flex justify-between items-center m-auto">
              <h1 className="text-xs">Project QC</h1>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-[#d0bcff]" : "bg-[#49454f]"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
