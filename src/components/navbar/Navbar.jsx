import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import mainlogo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className='mt-[22px]'>
    <div className="container">
        <div className="main_div flex justify-between items-center bg-amber-200">
            <div className="logo">
                <Link to={"/"}></Link>    <img src={mainlogo} alt="main_logo" />        </div>
                
            <div className="menu">
                <ul className='flex gap-10 font-dmsans font-normal text-[20px] text-[#FBFBFB]'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About </Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                   
                </ul>
            </div>
            <div className="btn font-normal font-dmsans text-[#000000] text-[18px] tracking-[3%] py-3 px-[15px] bg-[#FBFBFB] rounded-[23px]">
               <Link to="#">Get in touch</Link>
               
            </div>
        </div>
    </div>
      
    </nav>
  )
}

export default Navbar
