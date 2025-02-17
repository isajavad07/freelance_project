import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { BiArrowBack } from 'react-icons/bi'
import Navbar from '../components/Navbar'

const Job = () => {
    const [job, setJob] = useState('');
    const { jobId } = useParams();

    useEffect(() => {
    const fetchJob = async () => {
        axios.get(`http://localhost:5000/jobs/${jobId}`)
        .then((response) => {
            setJob(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }
    fetchJob();
    }, [jobId]);

  return (
    <>
        <Navbar />
        <div className='p-10'>
            <Link to='/jobs' className='flex text-2xl font-semibold text-blue-500 items-center gap-2'><BiArrowBack />Back to Jobs</Link>
            <div className='container bg-gray-100 p-4 rounded-2xl shadow-lg'>
                <div className='text-2xl font-semibold mb-3 shadow-sm'>{job.title}</div>
                <div className='text-lg font-medium text-gray-800'>{job.description}</div>
                <div className='text-lg font-medium mb-5 text-gray-800'>Budget: ${job.budget}</div>
                <div className="pb-2">
                    Tags:
                    <span className='p-1 container border rounded-lg bg-green-300'>#Graphics</span>
                    <span> </span>
                    <span className='p-1 container border rounded-lg bg-red-300'>#Urgent</span>
                </div>
                <div>
                    <input type='button' value="Apply for Job" className= 'flex w-full mt-4 bg-blue-500 text-white text-3xl px-4 py-2 rounded-2xl hover:bg-blue-600 items-center justify-center gap-2 sm:text-2xl sm:px-3 sm:py-2 md:text-lg md:px-2.5 md:py-1.5 cursor-pointer' />        
                </div>
            </div>
        </div>
    </>
  )
}

export default Job