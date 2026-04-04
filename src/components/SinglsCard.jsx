import React from 'react'
import { LuPenTool } from "react-icons/lu";


const SinglsCard = () => {
  return (
    <>
            <div className="container">
                <div>
        <div className='w-full  lg:w-[442px] lg:h-[368px] rounded-[20px] bg-[#F4F4F4] hover:bg-[#0c0c0c] duration-300 hover:text-[#F4F4F4] px-11 py-[45px]'>
            <div >
               <span className='px-[23px] py-[24px] bg-[#0C0C0C] inline-block rounded-[50%]'> <LuPenTool className='text-[33px] text-[#f4f4f4]  '/></span>

            </div>
            <h5 className='font-robotosharif font-medium text-[25px] text-[#0C0C0C] pt-[62px] pb-[15px]'>Content Marketing </h5>
            <p className='font-dmsans font-normal text-[18px] text-[#0C0C0C] W-[332px]'>Our team creates engaging and shareable content that resonates with your audience, drives organic traffic</p>

        </div>
    </div>  
            </div>
      
    </>
  )
}

export default SinglsCard
