import React from 'react'
import { HiLightBulb } from "react-icons/hi2";


const Singleprocess = ({prosname,prosDes}) => {
  return (
    <>
    <section>
        <div>
            <div className='flex items-center gap-[28px] pb-[32px]'>
               
            <span className='w-[78px] h-[78px] rounded-full bg-[#0C0C0C] text-[#FBFBFB] flex items-center justify-center'>
                <HiLightBulb  className='text-[58px]' />

            </span>
                <h6 className='font-robotosharif font-semibold text-[#0C0C0C] text-[30px]'>{prosname}</h6>
            </div>
            <div>
                <p className='font-dmsans font-normal text-[16px] text-[#0C0C0C] w-[195px]'>{prosDes}</p>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Singleprocess
