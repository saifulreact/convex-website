import React from 'react'
import profile from "../assets/pro.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";





const Slider = () => {
  return (
    <>
        <section className='py-[45px] bg-[#F4F4F4]'>
            <div className="container">
                <div className='m-auto   w-full flex justify-center i'>
                    <img src={profile} alt="profile" />
                </div>
                <div>
                    <p className='font-robotosharif font-bold text-[25px] text-[#0C0C0C] text-center my-[35px] '>“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”</p>
                </div>
                <div className='text-center'>
                    <h5 className='font-robotosharif font-semibold text-[20px] text-0[#0C0C0C]'>Jacqueline Miller</h5>
                    <p className='pt-1.5 pb-[21px] font-normal font-dmsans text-[16px] text-[#0C0C0C]'>CEO of an eduport</p>
                </div>
                <div className='flex gap-[11px] justify-center '>
                        <span className='w-[44px] h-[44px] rounded-full bg-[#0C0C0C] duration-300 text-white hover:text-black border-2 border-solid border-[#0C0C0C] hover:bg-transparent flex justify-center items-center'><IoIosArrowBack/></span>
                       <span className='w-[44px] h-[44px] hover:bg-[#0C0C0C] duration-300 hover:text-white  rounded-full bg-g-trabg-transparent border-2 border-solid border-[#0C0C0C]  flex justify-center 
                       items-center'> <IoIosArrowForward/></span>

                </div>
            </div>
        </section>

      
    </>
  )
}

export default Slider
