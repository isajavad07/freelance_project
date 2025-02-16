import React from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react';

const JobCard = ( {job} ) => {
  const navigate = useNavigate();

  const [showFullDesc, setshowFullDesc] = useState(false);

  let description = job.description;

  if(!showFullDesc) {
    description = description.substring(0,200) + '...'
  }

  const viewJob = () => {
    navigate(`/job/${job.title}`);
  }
  return (
    <>
      <div className='container bg-gray-100 p-4 rounded-2xl shadow-lg'>
        <div class="px-6 py-4">
          <div className='text-lg font-semibold mb-3'>{job.title}</div>
            <div className='text-sm font-medium text-gray-800'>{description}</div>
            <button onClick={() => setshowFullDesc((prev) => !prev)} 
            className="text-indigo-500 mb-5 hover:text-indigo-600 cursor-pointer">{ showFullDesc ? 'Show Less' : 'Show More' }
            </button>
            <div className="pb-2">
                Tags:
                <span className='p-1 container border rounded-lg bg-green-300'>#Graphics</span>
                <span> </span>
                <span className='p-1 container border rounded-lg bg-red-300'>#Urgent</span>
            </div>
            <div>
              <input type='button' onClick={viewJob} value="View Job Description Here" className= 'flex w-full mt-4 bg-blue-500 text-white text-3xl px-4 py-2 rounded-2xl hover:bg-blue-600 items-center justify-center gap-2 sm:text-2xl sm:px-3 sm:py-2 md:text-lg md:px-2.5 md:py-1.5 cursor-pointer' />
            </div>
          </div>
      </div>
    </>
  )
}

export default JobCard