import React from 'react'
import "./footer.css"
import mainlogo from "../../assets/logo.png"


const Footer = () => {
  return (
    <footer className='bg-[#0C0C0C] pt-[100px] pb-[60px]'>
        <div className="container">
            <div className="footer_main_row flex justify-between border-b-2 border-b-[#F4F4F4] pb-[101px]">
               <div className="footerRowOne">
                <img src={mainlogo} alt="footer_logo" />
                <p className='font-dmsans font-normal text-[18px] text-[#FFFFFF] w-[340px] pt-[27px]'>We're a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</p>
               </div>
               <div className="footer_rowTwo">
                <ul className='gap-4'>
                    <label className='font-robotosharif font-semibold text-[#FFFFFF] text-[20px]pb-6 flex'>Pages </label>
                    <li><a className='text-[#F4F4F4] font-dmsans font-normal text-[16px] ' href="#">Home</a> </li>
                    <li> <a className='text-[#F4F4F4] font-dmsans font-normal text-[16px] ' href="#">About</a></li>
                    <li> <a className='text-[#F4F4F4] font-dmsans font-normal text-[16px] ' href="#">Portfolio</a></li>
                    <li> <a className='text-[#F4F4F4] font-dmsans font-normal text-[16px] ' href="#">Portfolio Single</a></li>

                </ul>
               </div>
               <div className="footer_rowTwo">
                <ul className='gap-4'>
                    <label className='font-robotosharif font-semibold text-[#FFFFFF] text-[20px]pb-6 flex'>Pages </label>
                    <li><a className='text-[#F4F4F4] font-dmsans font-normal text-[16px] ' href="#">Home</a> </li>
                    <li> <a className='text-[#F4F4F4] font-dmsans font-normal text-[16px] ' href="#">About</a></li>
                    <li> <a className='text-[#F4F4F4] font-dmsans font-normal text-[16px] ' href="#">Portfolio</a></li>
                    <li> <a className='text-[#F4F4F4] font-dmsans font-normal text-[16px] ' href="#">Portfolio Single</a></li>

                </ul>
               </div>
               <div>
                <button className='font-robotosharif font-semibold text-[20px]  text-[#FFFFFF]'>Subscribe</button>
                <div className='w-[343px] h-[67px] bg-[#FBFBFB] flex justify-between items-center rounded-[20px] pl-[23px] pr-[10px] mt-[19px]'>
                  <input placeholder='Enter your email here' className='outline-0 border-0 placeholder:text-[#0C0C0C] placeholder:text-[18px] placeholder:font-normal font-normal text-[18px] font-dmsans  ' type="Enter your email here" />
                  <button className='font-normal text-[18px] font-dmsans text-[#FBFBFB] py-[12px] px-[15px] rounded-[20px] bg-[#0C0C0C]'>Subscribe</button>

                </div>
               </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex justify-between pt-[29px]'>
              <div>
                <h4 className='text-[#F4F4F4] font-robotosharif font-bold text-[20px] pb-[16px]'>Copyright by</h4>
                <p className='text-[#F4F4F4] font-dmsans font-normal text-[16px]'>Designed by Iconstica.com</p>
              </div>
              
            </div>
            <div className='flex justify-between pt-[29px]'>
              <div>
                <h4 className='text-[#F4F4F4] font-robotosharif font-bold text-[20px] pb-[16px]'>Copyright by</h4>
                <p className='text-[#F4F4F4] font-dmsans font-normal text-[16px]'>Designed by Iconstica.com</p>
              </div>
              
            </div>
            <div className='flex justify-between pt-[29px]'>
              <div>
                <h4 className='text-[#F4F4F4] font-robotosharif font-bold text-[20px] pb-[16px]'>Copyright by</h4>
                <p className='text-[#F4F4F4] font-dmsans font-normal text-[16px]'>Designed by Iconstica.com</p>
              </div>
              
            </div>
            <div className="social flex gap-[29px] pt-[29px]">
              <span className='text-white'>fa</span>
              <span className='text-white'>fa</span>
              <span className='text-white'>fa</span>
            </div>

            </div>
        </div>
      
    </footer>
  )
}

export default Footer
