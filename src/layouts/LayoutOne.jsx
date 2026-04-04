import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ResNavbar from '../components/navbar/ResNavbar'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <ResNavbar/>
    <Outlet/>
      
    </>
  )
}

export default LayoutOne
