import React from 'react'
import missionImage from "../assets/mission.png"
import BannerCommonbtn from './common/BannerCommonbtn'

const Misson = () => {
  return (
    <>
    <section className='py-[100px] bg-[#0C0C0C]'>
        <div className="container">
        <div className='flex justify-between'>
            <div>
                <img src={missionImage} alt="" />
            </div>
            <div>
                <h5 className='font-robotosharif font-semibold text-[30px] text-[#64CCC5]'>About us </h5>
                <h4 className='font-robotosharif font-semibold text-[64px] text-[#FBFBFB] w-[586px] py-[25px]'>The core mission 
behind all our
work</h4>
<p className='font-dmsans font-normal text-[18px] text-[#F4F4F4] w-[564px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
<div className='flex pt-[25px] pb-[43px] gap-[59px] items-center'>
    <div className=''>
        <h3 className='font-robotosharif font-semibold text-[45px] text-[#64CCC5]'>330 +</h3>
        <p className='font-dmsans font-normal text-[16px] text-[#F4F4F4]'>Companies helped</p>
    </div>
    <div>
        <h3 className='font-robotosharif font-semibold text-[45px] text-[#64CCC5]'>330 +</h3>
        <p className='font-dmsans font-normal text-[16px] text-[#F4F4F4]'>Companies helped</p>
    </div>
</div>
<BannerCommonbtn />
            </div>

        </div>
    </div>
    </section>
      
    </>
  )
}

export default Misson
