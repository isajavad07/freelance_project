import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard';
import axios from 'axios';

const ViewJobs = () => {
    const [job, setJob] = useState([]);

    useEffect(() => {
    const fetchJob = async () => {
        axios.get('http://localhost:5000/jobs/')
        .then((response) => {
            setJob(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    fetchJob();
    }, []);
    
  return (
    <>
        <Navbar />
        <div className='p-10'>
            <div className='container w-fit bg-gray-200 border rounded-2xl shadow-sm'>
            <div className='p-4 text-6xl font-semibold text-center text-indigo-600 shadow-lg'>Browse All Jobs</div>
              <div className='grid w-fit grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                {job.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </div>
            
        </div>
    </>
  )
}

export default ViewJobs