import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Global/Private/Sidebar'
import Topbar from '../Global/Private/Topbar'

function Dashboard() {
    return (
        <div className='grid grid-cols-6 bg-[#0B1437]'>
            <Sidebar />
            <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-7 h-screen">
                <Topbar />
                <main className='h-screen overflow-y-scroll scrollbar-hide'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Dashboard