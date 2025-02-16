import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Dashboard = () => {

  return (
    <>
        <Navbar />
        <div className='py-10 px-15'>
            <div className='container w-screen bg-gray-200 border rounded-2xl shadow-sm'>
            <div className='p-4 text-6xl font-semibold text-center text-indigo-600 shadow-lg'>Welcome to the Dashboard</div>
              <div className='grid grid-cols-2 h-fit w-full p-4'>
                <div className='container w-full shadow-lg bg-gray-500'>
                    <nav className='p-2 border text-lg font-medium bg-white'>
                        <ul className='text-4xl font-medium'>
                            <li className='shadow-lg hover:text-indigo-600 cursor-pointer'>Manage Profile</li>  
                            <li className='shadow-lg hover:text-indigo-600 cursor-pointer'>View Job Listings</li>
                            <li className='shadow-lg hover:text-indigo-600 cursor-pointer'>View Company Profiles</li>
                        </ul>
                    </nav>
                </div>
                <div className='grid grid-cols-2 container border w-full text-2xl shadow-lg '>
                    <p>Hello</p>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard