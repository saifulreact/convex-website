import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const BannerCommonbtn = () => {
  return (
    <>
    <Link className='flex items-center gap-2.5 text-[20px] font-normal text-[#0C0C0C] font-dmsans py-[19px] px-[22px] bg-[#FFFFFF] rounded-[23px] w-[255px]' to="/"><IoIosArrowDroprightCircle className='text-[24px]' /> Start your Free Trial</Link>
      
    </>
  )
}

export default BannerCommonbtn
