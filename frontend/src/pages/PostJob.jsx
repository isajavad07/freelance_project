import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import Navbar from '../components/Navbar'
import axios from 'axios'


const PostJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();

  const postJob = async(e) => {
    e.preventDefault();

    const info = { title, description, budget };
    axios.post('http://localhost:5000/jobs/create', info)
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
    navigate('/postJob');
    setTitle('');
    setDescription('');
    setBudget('');
  }

  return (
    <>
        <Navbar />
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='w-100 p-6 border rounded shadow bg-white'>
            <form className='flex flex-col gap-4' onSubmit={postJob}>
                <h1 className='text-5xl font-medium text-center'>Post New Job</h1>

                <label htmlFor='title' className='font-medium text-2xl'>Title:</label>
                <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} className='border p-2 rounded' placeholder='Insert a title for your job' required/>

                <label htmlFor='description' className='font-medium text-2xl'>Description:</label>
                <textarea name='description' value={description} onChange={(e) => setDescription(e.target.value)} className='border p-2 rounded h-50' placeholder='Insert the description for your job' required/>

                <label htmlFor='budget' className='font-medium text-2xl'>Budget:</label>
                <input type='number' name='budget' min="1" max="25000" value={budget} onChange={(e) => setBudget(e.target.value)} className='border p-2 rounded' placeholder='Insert the budget for your job' required/>
                
                <button type='submit' className='mt-4 bg-blue-500 text-white text-2xl px-4 py-2 rounded hover:bg-blue-600'>
                Post Job
                </button>
            </form>
        </div>
        </div>
    </>
  )
}

export default PostJob