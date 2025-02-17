import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <>
        <Navbar />
        <div className='py-10 px-15 bg-gray-100'>
            <div className='container w-screen bg-gray-200 border rounded-2xl shadow-sm'>
            <div className='p-4 text-6xl font-semibold text-center text-indigo-600 shadow-lg'>Welcome to the Dashboard</div>
              <div className='grid grid-cols-2 h-fit w-full p-4'>
                <div className='container w-full shadow-lg bg-gray-500'>
                    <nav className='p-2 border text-lg font-medium bg-white'>
                        <ul className='text-4xl font-medium'>
                            <li className='shadow-lg hover:text-indigo-600 cursor-pointer' onClick={() => setActiveTab('profile')}>Manage Profile</li>  
                            <li className='shadow-lg hover:text-indigo-600 cursor-pointer' onClick={() => setActiveTab('jobListings')}>View Job Listings</li>
                            <li className='shadow-lg hover:text-indigo-600 cursor-pointer' onClick={() => setActiveTab('companyProfiles')}>View Company Profiles</li>
                        </ul>
                    </nav>
                </div>
                {activeTab === '' && (
                  <div className='p-2 container border w-full text-2xl shadow-lg bg-white'>
                    <p>Click on a tab to view content</p>
                  </div>
                )}
                {activeTab === 'profile' && (
                  <div className='p-2 container border w-full text-2xl shadow-lg bg-white'>
                    <p>Profile</p>
                  </div>
                )}
                {activeTab === 'jobListings' && (
                  <div className='p-2 container border w-full text-2xl shadow-lg bg-white'>
                    <p>Job Listings</p>
                  </div>
                )}
                {activeTab === 'companyProfiles' && (
                  <div className='p-2 container border w-full text-2xl shadow-lg bg-white'>
                    <p>Company</p>
                  </div>
                )}
              </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard