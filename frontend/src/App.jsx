import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Company from './pages/Company'
import PostJob from './pages/PostJob'
import ViewJobs from './pages/ViewJobs'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/postjob' element={<PostJob />}></Route>
          <Route path='/jobs' element={<ViewJobs />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  )
} 

export default App