import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Home = () => {
  const [job, setJob] = useState([]);
  const navigate = useNavigate();

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
  // useEffect(() => {
  //   const fetchJob = async () => {
  //     const res = await fetch('http://localhost:8000/Jobs');
  //     const data = await res.json();
  //     setJob(data);
  //   };

  //   fetchJob();
  // }, []);

  const recentJobs = job.slice(0,3);

  const viewJobs = () => {
    navigate('/jobs');
  }

  return (
    <>
        <Navbar />
        <div className='p-10'>
            <div className='container w-fit bg-gray-200 border rounded-2xl shadow-sm'>
            <div className='p-4 text-6xl font-semibold text-center text-indigo-600 shadow-lg'>Become a Freelancer Today</div>
              <div className='grid grid-cols-2 w-fit p-4 gap-4'>
                  <img src='/src/assets/join.jpg' className='w-full rounded-4xl h-auto block shadow-lg' />

                <div className='p-4 container border rounded-4xl w-fit shadow-lg'>
                  <div className='p-8 container rounded-4xl w-fit shadow-lg bg-gray-900'>
                    <div className='text-lg font-medium text-white'>
                    Are you a skilled professional ready to take your freelance career to the next level?
                    Join our esteemed community of freelancers at Jobs4You. We offer a platform that connects top-tier freelancers with clients seeking exceptional talent. Whether you specialize in writing, design, development, or any other field, our platform provides the resources and support you need to thrive.
                    Register today and gain access to a world of opportunities tailored to your expertise.
                    Elevate your freelance career with us.
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className='p-10 pt-3'>
            <div className='container w-fit bg-gray-200 border rounded-2xl shadow-sm'>
            <div className='p-4 text-6xl font-semibold text-center text-indigo-600 shadow-lg'>Latest Jobs</div>
              <div className='grid w-fit grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                {recentJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
              <div className='container w-full p-4'>
                <input type='button' onClick={viewJobs} value="VIEW ALL JOBS" className='p-3 w-full rounded-2xl text-white text-2xl font-medium bg-gray-900 shadow-sm cursor-pointer' />
              </div>
            </div>
        </div>

        
    </>
    
  )
}

export default Home