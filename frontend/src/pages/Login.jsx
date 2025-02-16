import React from 'react'
import { Link } from 'react-router';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const creds = { email, password };
    axios.post('http://localhost:5000/users/login', creds)
    .then((response) => {
      console.log(response);
      navigate('/dashboard');
    }).catch((error) => {
      console.log(error);
    })

    setEmail('');
    setPassword('');
  }
  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='w-100 p-6 border rounded shadow bg-white'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <h1 className='text-5xl font-medium text-center'>Login</h1>

            <label htmlFor='email' className='font-medium text-2xl'>Email:</label>
            <input type='text' name='email' className='border p-2 rounded' value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor='password' className='font-medium text-2xl'>Password:</label>
            <input type='password' name='password' className='border p-2 rounded' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type='submit' className='flex mt-4 bg-blue-500 text-white text-2xl px-4 py-2 rounded hover:bg-blue-600 items-center justify-center gap-2'>
              Sign in <FaArrowRight />
            </button>
          </form>
          <Link to='/register' className='font-medium text-base text-blue-600 dark:text-blue-500 hover:underline'>Don't have an account? Register for one here!</Link>
        </div>
      </div>
    </>
  )
}

export default Login
