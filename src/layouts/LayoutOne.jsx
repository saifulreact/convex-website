import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ResNavbar from '../components/navbar/ResNavbar'
import Footer from '../components/footer/Footer'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <ResNavbar/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default LayoutOne
