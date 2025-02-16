import React from 'react'
import Navbar from '../components/Navbar'

const Company = () => {
  return (
    <>
        <Navbar />
        <div className='p-10'>
            <div className='container border rounded-3xl w-fit bg-gray-200 shadow-xl'>
                <h1 className='text-9xl font-medium text-center mb-10'>OUR MISSON</h1>
                <p className='text-2xl text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='px-6 py-2'></div>
                <div className='container flex w-fit mx-auto'>
                    <img src='/src/assets/client.jpg' alt='Client Image' className='w-full rounded-4xl h-auto block' />
                </div>
                <div className='px-6 py-2'></div>
            </div>
        </div>
    </>
  )
}

export default Company
