import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <Disclosure as="nav" className='px-4 bg-[#0B1437] h-[80px] flex items-center justify-between'>
      {({ open }) => (<>
        <div className="text-white">
          <div className="text-xs">Pages / Profile</div>
          <div className="text-xl font-bold">Profile</div>
        </div>
        <div className="bg-[#111C44] rounded-full flex items-center justify-evenly p-2">
          <input type="text" className='bg-[#0B1437] rounded-full text-white px-4 py-2 text-sm mr-2' placeholder='Search' />
          <div className="h-4 w-4 mr-4 cursor-pointer">
            <img src="./assets/icon/bell.svg" alt="" />
          </div>
          <div className="h-4 w-4 mr-4 cursor-pointer">
            <img src="./assets/icon/moon.svg" alt="" />
          </div>
          <div className="h-4 w-4 mr-4 cursor-pointer">
            <img src="./assets/icon/info.svg" alt="" />
          </div>
          <Menu as="div">
            <Menu.Button>
              <img className='h-8 w-8 rounded-full ring-2 cursor-pointer' src="./assets/img/elipse.jpg" alt="" />
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
              <Menu.Items className="p-3 absolute right-4 w-56 mt-2 origin-top-right bg-gradient-to-r from-[#868CFF] to-[#4318FF] bg-gradient-135 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item as="div">
                    {({ active }) => (
                      <Link className='text-white text-xs tracking-wide' to="/dashboard" >
                        Setting
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item as="div">
                    {({ active }) => (
                      <Link className='text-white text-xs tracking-wide' to="/dashboard" >
                        Setting
                      </Link>
                    )}
                  </Menu.Item>
              </Menu.Items>

            </Transition>

          </Menu>
        </div>
      </>)}
    </Disclosure>
  )
}

export default Topbar
