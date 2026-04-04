import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";


const ResNavbar = () => {
    const [show,setshow]=useState(false)
  return (
    <nav className='lg:hidden absolute top-0 left-0 w-full'>
           <div className="container">
             <div className="main_ddiv py-2.5 px-1.5 flex items-center justify-between">
                <div className="logo_col">
                  <Link className='w-[100px] inline-block ' to={"/"}> <img src={logo} alt="main_logo" /></Link>
                </div>
                <div className="resside">
                    
                    <FaBars onClick={()=>setshow(!show)} className='text-red-400'/>
                        

                </div>
            </div>
           </div>

           
             <div className={` w-[250px] flex duration-300 flex-col gap-4 justify-center items-center absolute top-0 ${!show?"right-0":"left-[-100%]"}  h-screen bg-green-400`}>
<div className='absolute w-[100px] py-2 px-2 top-0 left-0'>
                        <img src={logo} alt="main_logo" />
                    </div>
           <RxCross1 onClick={()=>setshow(!show)} className='text-2xl text-red-400 absolute top-[20px] right-[20px]' />

            <ul className='font-dmsans font-normal text-[20px] text-[#FBFBFB]'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>About</Link></li>
                <li><Link to={"/"}>Contact us</Link></li>
            </ul>
            <button className='font-dmsans font-normal text-[18px] bg-[#FBFBFB] text-[#0C0C0C] rounded-[23px] py-3 px-3.5'>Get in touch</button>

        </div>
       
   
      
    </nav>
  )
}

export default ResNavbar
