import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='bg-[#111C44] max-h-screen text-white md:block hidden'>
            <div className="h-[80px] flex items-center justify-center border-b border-slate-600">
                <h1 className='text-xl font-bold uppercase tracking-widest'>Side<span className='font-thin'>bar</span></h1>
            </div>
            <div className="my-4 h-[calc(100%-80px)] overflow-y-scroll scrollbar-hide">
                <div className="pl-4 py-3 hover:text-[#7551FF]">
                    <Link className='flex items-center gap-2 hover:border-r-4 hover:border-[#7551FF] ease-in-out duration-100' to="/">
                        <img className='h-3 w-3' src="./assets/icon/home.svg" alt="" />
                        <span className='text-xs font-thin tracking-wide'>Dashboard</span>
                        </Link>
                </div>
                <div className="pl-4 py-3 hover:text-[#7551FF]">
                    <Link className='flex items-center gap-2 hover:border-r-4 hover:border-[#7551FF] ease-in-out duration-100' to="/">
                        <img className='h-3 w-3' src="./assets/icon/cart.svg" alt="" />
                        <span className='text-xs font-thin tracking-wide'>NFT Marketplace</span>
                        </Link>
                </div>
                <div className="pl-4 py-3 hover:text-[#7551FF]">
                    <Link className='flex items-center gap-2 hover:border-r-4 hover:border-[#7551FF] ease-in-out duration-100' to="/">
                        <img className='h-3 w-3' src="./assets/icon/stick.svg" alt="" />
                        <span className='text-xs font-thin tracking-wide'>Tables</span>
                        </Link>
                </div>
                <div className="pl-4 py-3 hover:text-[#7551FF]">
                    <Link className='flex items-center gap-2 hover:border-r-4 hover:border-[#7551FF] ease-in-out duration-100' to="/">
                        <img className='h-3 w-3' src="./assets/icon/square-menu.svg" alt="" />
                        <span className='text-xs font-thin tracking-wide'>Kanban</span>
                        </Link>
                </div>
                <div className="pl-4 py-3 hover:text-[#7551FF]">
                    <Link className='flex items-center gap-2 hover:border-r-4 hover:border-[#7551FF] ease-in-out duration-100' to="/profile">
                        <img className='h-3 w-3' src="./assets/icon/person.svg" alt="" />
                        <span className='text-xs font-thin tracking-wide'>Profile</span>
                        </Link>
                </div>
                <div className="pl-4 py-3 hover:text-[#7551FF]">
                    <Link className='flex items-center gap-2 hover:border-r-4 hover:border-[#7551FF] ease-in-out duration-100' to="/">
                        <img className='h-3 w-3' src="./assets/icon/lock.svg" alt="" />
                        <span className='text-xs font-thin tracking-wide'>Sign In</span>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
