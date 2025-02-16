import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirm) {
      alert('Passwords do not match');
    } else {
      const creds = { email, password, phone };
      axios.post('http://localhost:5000/users/create', creds)
      .then((response) => {
        console.log(response);
        navigate('/login');
      }).catch((error) => {
        console.log(error);
      })
    }

    setEmail('');
    setPassword('');
    setConfirm('');
    setPhone('');
  }
  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-100 p-6 border rounded shadow bg-white'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <h1 className='text-5xl font-medium text-center'>Register</h1>

          <label htmlFor='email' className='font-medium text-2xl'>Email:</label>
          <input type='text' name='email' className='border p-2 rounded' value={email} onChange={(e) => setEmail(e.target.value)} required/>

          <label htmlFor='password' className='font-medium text-2xl'>Password:</label>
          <input type='password' name='password' className='border p-2 rounded' value={password} onChange={(e) => setPassword(e.target.value)} required/>

          <label htmlFor='confirm' className='font-medium text-2xl'>Confirm Password:</label>
          <input type='password' name='confirm' className='border p-2 rounded' value={confirm} onChange={(e) => setConfirm(e.target.value)} required/>

          <label htmlFor='phone' className='font-medium text-2xl'>Phone:</label>
          <input type='text' name='phone' className='border p-2 rounded' value={phone} onChange={(e) => setPhone(e.target.value)} required/>

          <button type='submit' className='mt-4 bg-blue-500 text-white text-2xl px-4 py-2 rounded hover:bg-blue-600'>
            Sign Up
          </button>
        </form>
        <Link to='/login' className='font-medium text-base text-blue-600 dark:text-blue-500 hover:underline'>Already have an account? Sign in Here!</Link>
      </div>
    </div>
  </>
  )
}

export default Register