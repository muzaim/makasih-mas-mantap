import React from 'react'
import './style.css'

function index() {
  return (
    <div className='p-4 text-white'>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#111C44] rounded-xl h-48 p-2 text-white ">s</div>
        <div className="bg-[#111C44] rounded-xl h-48 p-2 text-white md:col-span-2">s</div>
        <div className="bg-[#111C44] rounded-xl h-48 p-2 text-white ">s</div>
      </div>
    </div>
  )
}

export default index
