import React from 'react'
import "./footer.css"
import mainlogo from "../../assets/logo.png"


const Footer = () => {
  return (
    <footer className='bg-[#0C0C0C] pt-[100px] pb-[60px]'>
        <div className="container">
            <div className="footer_main_row flex justify-between">
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
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
