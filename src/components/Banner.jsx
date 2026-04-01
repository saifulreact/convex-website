import React from 'react'
import BannerCommonbtn from './common/BannerCommonbtn'
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import banneroverlay from "../assets/overlay.png"
import mainBanner from "../assets/mainBanner.png"

const Banner = () => {
  return (
    <>
    <section className='bg-[#0C0C0C] pt-[228px] pb-[126px] relative z-[-1]'>
      <div style={{background:`url(${banneroverlay})`,backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'center'}} 
      
      className='w-full h-full absolute top-0 left-0 '>

      </div>
      <div className="container">
        <div className="banner_row flex ">
          <div className="banner_text">
            <h1 className='font-semibold text-[64px] text-[#FBFBFB] font-robotosharif w-[608px]'>Ready to take your 
              <span className='text-[#64CCC5] block'>Business Growth </span>
              to the next level?
              </h1>
              <p className='font-dmsans font-normal text-[18px] text-[#FBFBFB] w-[557px] tracking-[3%] mt-[24px] mb-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
              <BannerCommonbtn/>
              <p className='font-robotosharif font-semibold text-[20px] text-[#64CCC5] mb-[5px] mt-[181px]' >Trusted by Leading Brands</p>

              <div className='flex gap-[10px] '>
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
              </div>
          </div>
          <div className="baner_image ">
            <img className='w-[850px]' src={mainBanner} alt="main_banner_images" />
          </div>
        </div>
    </div>
    </section>
      
    </>
  )
}

export default Banner
