import React from 'react'
import Navbar from '../components/Navbar'

const Company = () => {
  return (
    <>
      <Navbar />
      <div className='p-10 bg-gray-100'>
        <div className='container border rounded-3xl w-fit bg-white shadow-xl mx-auto p-10'>
          <div className='text-5xl font-bold text-center mb-10 text-gray-800'>OUR MISSION</div>
          <div className='text-lg text-gray-700 leading-relaxed'>
            Welcome to Jobs4U! We're your one-stop destination for connecting talented freelancers with exciting job opportunities. Whether you're a freelancer seeking your next gig or an employer in need of top-notch talent, you've come to the right place.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4'>
            At Jobs4U, our mission is simple: to bridge the gap between freelancers and employers, creating a thriving marketplace where skills and opportunities meet. We understand that finding the perfect match can be challenging, and that's why we're here to make the process seamless, efficient, and enjoyable.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4'>
            <strong>Who We Are</strong><br />
            Jobs4U is powered by a team of dedicated professionals who are passionate about the freelance economy. Our team includes experienced recruiters, tech enthusiasts, and customer service experts who are committed to supporting both freelancers and employers every step of the way. We believe in the power of freelance work to transform lives and businesses, and we're here to make that transformation a reality.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4'>
            <strong>What We Do</strong><br />
            <strong>For Freelancers:</strong> We offer a wide range of job opportunities across various industries and skill sets. From tech and creative roles to administrative and customer service positions, there's something for everyone. Our platform is designed to make job hunting easy, with features like personalized job recommendations, secure payments, and a supportive community.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4'>
            <strong>For Employers:</strong> We provide access to a diverse pool of talented freelancers who are ready to tackle your projects. Our platform allows you to post job listings, review applications, and hire the best candidates with ease. We also offer tools for project management, time tracking, and secure payments to ensure a smooth collaboration.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4'>
            <strong>Why Choose Jobs4U?</strong><br />
            <strong>User-Friendly Platform:</strong> Our website is designed with you in mind, making it easy to navigate and find what you're looking for.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4'>
            <strong>Trust and Security:</strong> We prioritize the safety and security of our users, ensuring that your information and transactions are protected.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4'>
            <strong>Community and Support:</strong> Join a community of like-minded professionals and get support from our dedicated customer service team.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4'>
            <strong>Growth and Opportunity:</strong> We believe in helping our users grow their careers and businesses, providing access to a wide range of resources and opportunities.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4'>
            Join us at Jobs4U and start your journey towards success today! Whether you're a freelancer looking for your next project or an employer seeking top talent, we're here to help you achieve your goals.
          </div>
          <div className='text-lg text-gray-700 leading-relaxed mt-4 font-bold'>
            Jobs4U - Where Talent Meets Opportunity.
          </div>
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
