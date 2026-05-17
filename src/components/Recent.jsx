import React from 'react'
import flower from "../assets/flower.png"
import banImage from "../assets/ban.png"
import sunImage from "../assets/sun.png"
import personImage from "../assets/person.png"

const Recent = () => {
  return (
    <>
    <section>
        <div className="container">
            <div>
                <h2 className='font-robotosharif font-semibold text-[64px] text-[#0C0C0C] text-center mb-[85px]'>Recent Showcase</h2>
                <div className='flex justify-between '>
                 <div>
                      <div>
                            <img src={flower} alt="flower_images" />
                            <h5 className='font-robotosharif font-semibold text-[30px] text-[#0C0C0C] pt-[15px] pb-[10px]'>Web UI design</h5>
                            <p className='font-dmsans font-normal text-[18px] text-[30px] '>Creative  UI design</p>
                    </div>
                    <div className='pt-[88px]'>
                            <img src={banImage} alt="flower_images" />
                            <h5 className='font-robotosharif font-semibold text-[30px] text-[#0C0C0C] pt-[15px] pb-[10px]'>UI Design</h5>
                            <p className='font-dmsans font-normal text-[18px] text-'>Creative Rebranding for logo</p>
                    </div>
                  </div>
                 <div className='pt-[159px]'>
                      <div>
                        
                            <img src={sunImage} alt="flower_images" />
                            <h5 className='font-robotosharif font-semibold text-[30px] text-[#0C0C0C] pt-[15px] pb-[10px]'>To design Digital Strategy</h5>
                            <p className='font-dmsans font-normal text-[18px] text-[30px] '>Social Media Marketing</p>
                    </div>
                    <div className='pt-[88px]'>
                            <img src={personImage} alt="flower_images" />
                            <h5 className='font-robotosharif font-semibold text-[30px] text-[#0C0C0C] pt-[15px] pb-[10px]'>UI Design</h5>
                            <p className='font-dmsans font-normal text-[18px] text-'>Creative Rebranding for logo</p>
                    </div>
                  </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Recent
