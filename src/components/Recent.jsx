import React from 'react'
import flower from "../assets/flower.png"

const Recent = () => {
  return (
    <>
    <section>
        <div className="container">
            <div>
                <h2 className='font-robotosharif font-semibold text-[64px] text-[#0C0C0C] text-center mb-[85px]'>Recent Showcase</h2>
                <div className='flex justify-between'>
                    <div>
                            <img src={flower} alt="flower_images" />
                            <h5 className='font-robotosharif font-semibold text-[30px] text-[#0C0C0C]'>ImageNmae</h5>
                            <p className='font-dmsans font-normal text-[18px] text-'>ImageDes</p>
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
